function analyzeMD5() {
    let md5_value = document.getElementById("md5-input").value.trim().toLowerCase();

    if (md5_value.length !== 32 || !/^[0-9a-f]+$/.test(md5_value)) {
        document.getElementById("result").innerHTML = "⚠️ Mã MD5 không hợp lệ!";
        return;
    }

    let results = [];

    // 1️⃣ Phương pháp 1: Tổng chữ số trong MD5
    let digitSum = [...md5_value].filter(c => !isNaN(c)).reduce((sum, c) => sum + parseInt(c, 16), 0);
    results.push(digitSum % 18 >= 11 ? "Tài" : "Xỉu");

    // 2️⃣ Phương pháp 2: Tổng ASCII của 10 ký tự đầu và cuối
    let asciiSum = [...md5_value.slice(0, 10), ...md5_value.slice(-10)].reduce((sum, c) => sum + c.charCodeAt(0), 0);
    results.push(asciiSum % 18 >= 11 ? "Tài" : "Xỉu");

    // 3️⃣ Phương pháp 3: Ký tự cuối chẵn/lẻ
    let lastChar = parseInt(md5_value[md5_value.length - 1], 16);
    results.push(lastChar % 2 ? "Tài" : "Xỉu");

    // 4️⃣ Phương pháp 4: Trung bình các số
    let numericValues = [...md5_value].map(c => parseInt(c, 16));
    let avgValue = numericValues.reduce((a, b) => a + b, 0) / numericValues.length;
    results.push(avgValue >= 7.5 ? "Tài" : "Xỉu");

    // 5️⃣ Phương pháp 5: XOR tổng giá trị hash
    let xorHash = numericValues.reduce((a, b) => a ^ b, 0);
    results.push(xorHash % 100 >= 50 ? "Tài" : "Xỉu");

    // 6️⃣ Phương pháp 6: Trung bình ASCII của toàn bộ MD5
    let asciiAvg = numericValues.reduce((sum, c) => sum + c, 0) / numericValues.length;
    results.push(asciiAvg >= 100 ? "Tài" : "Xỉu");

    // 7️⃣ Phương pháp 7: Tổng số chữ và số
    let digitCount = md5_value.replace(/[^0-9]/g, "").length;
    let letterCount = md5_value.length - digitCount;
    results.push(letterCount > digitCount ? "Tài" : "Xỉu");

    // 8️⃣ Phương pháp 8: Tổng các giá trị modulo 97
    let hashSumMod = numericValues.reduce((sum, n) => sum + (n % 97), 0) % 97;
    results.push(hashSumMod >= 48 ? "Tài" : "Xỉu");

    // 9️⃣ Phương pháp 9: XOR ASCII từng ký tự
    let xorAscii = [...md5_value].reduce((xor, c) => xor ^ c.charCodeAt(0), 0);
    results.push(xorAscii % 2 ? "Tài" : "Xỉu");

    // 🔟 Phương pháp 10: So sánh tổng giá trị 2 nửa MD5
    let firstHalf = md5_value.slice(0, 16).split('').reduce((sum, c) => sum + parseInt(c, 16), 0);
    let secondHalf = md5_value.slice(16).split('').reduce((sum, c) => sum + parseInt(c, 16), 0);
    results.push(firstHalf > secondHalf ? "Tài" : "Xỉu");

    // 1️⃣1️⃣ Phương pháp 11: Tổng ASCII các chữ cái
    let letterSum = [...md5_value].filter(c => isNaN(c)).reduce((sum, c) => sum + c.charCodeAt(0), 0);
    results.push(letterSum % 2 ? "Tài" : "Xỉu");

    // 1️⃣2️⃣ Phương pháp 12: Tổng giá trị modulo 73
    let hashSumMod73 = numericValues.reduce((sum, n) => sum + n, 0) % 73;
    results.push(hashSumMod73 > 36 ? "Tài" : "Xỉu");

    // 1️⃣3️⃣ Phương pháp 13: So sánh tổng chữ số chẵn/lẻ
    let evenSum = numericValues.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
    let oddSum = numericValues.filter(n => n % 2 === 1).reduce((a, b) => a + b, 0);
    results.push(evenSum > oddSum ? "Tài" : "Xỉu");

    // 1️⃣4️⃣ Phương pháp 14: Trung bình giá trị 4 byte cuối
    let lastBytesAvg = [...Array(4).keys()]
        .map(i => parseInt(md5_value.slice(-2 - i * 2, -i * 2), 16))
        .reduce((a, b) => a + b, 0) / 4;
    results.push(lastBytesAvg >= 128 ? "Tài" : "Xỉu");

    // 1️⃣5️⃣ Phương pháp 15: So sánh giá trị đối xứng
    let symmetricDiff = [...Array(16).keys()]
        .map(i => Math.abs(parseInt(md5_value[i], 16) - parseInt(md5_value[31 - i], 16)))
        .reduce((a, b) => a + b, 0);
    results.push(symmetricDiff % 2 ? "Tài" : "Xỉu");

    let hashAlgorithms = ["md5", "sha1", "sha224", "sha256", "sha384", "sha512", "sha3_224", "sha3_256", "sha3_384", "sha3_512", "blake2b", "blake2s"];
    hashAlgorithms.forEach(type => {
        let hashResult = performHashing(md5_value, type);
        let hashSum = [...hashResult].reduce((sum, c) => sum + parseInt(c, 16), 0) % 2;
        results.push(hashSum ? "Tài" : "Xỉu");
    });

    // ✅ **Tính toán kết quả cuối cùng bằng phương pháp đa số**
    let taiCount = results.filter(r => r === "Tài").length;
    let xiuCount = results.length - taiCount;
    let finalResult = taiCount > xiuCount ? "🎲 TÀI" : "🎲 XỈU";

    // 🎯 **Hiển thị kết quả**
    document.getElementById("result").innerHTML = `
        <p><b>Kết quả:</b> ${finalResult}</p>
        <p><b>Chi tiết phương pháp:</b> ${results.join(", ")}</p>
    `;
}

function performHashing(input, type) {
    let hashObj = {
        "md5": CryptoJS.MD5(input).toString(),
        "sha1": CryptoJS.SHA1(input).toString(),
        "sha224": CryptoJS.SHA224(input).toString(),
        "sha256": CryptoJS.SHA256(input).toString(),
        "sha384": CryptoJS.SHA384(input).toString(),
        "sha512": CryptoJS.SHA512(input).toString(),
        "sha3_224": CryptoJS.SHA3(input, { outputLength: 224 }).toString(),
        "sha3_256": CryptoJS.SHA3(input, { outputLength: 256 }).toString(),
        "sha3_384": CryptoJS.SHA3(input, { outputLength: 384 }).toString(),
        "sha3_512": CryptoJS.SHA3(input, { outputLength: 512 }).toString(),
        "blake2b": input,  // CryptoJS không hỗ trợ Blake2b
        "blake2s": input   // CryptoJS không hỗ trợ Blake2s
    };
    return hashObj[type] || input;
}
