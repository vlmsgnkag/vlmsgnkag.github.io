let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
                    {
        img : 'https://i.scdn.co/image/ab67616d0000b273dd5a801c2def0e15beae8548',
        name : 'Gặp Nhưng Không Ở Lại',
        artist : 'Hiền Hồ Ft. Vương Anh Tú',
        music : 'music/34.mp3'
    },
                      {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/2/6/4/7/2647844cdbd9360beb32a6ca7da1ab7e.jpg',
        name : 'Rời Bỏ',
        artist : 'Hòa Minzy',
        music : 'music/35.mp3'
    },
           {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/3/2/6/8/3268b5a7ef8bc57a0efc516c35bb24c3.jpg',
        name : 'Sau Cơn Mưa',
        artist : 'Hook x COOLKID x ft. RHYDER',
        music : 'music/41.mp3'
    },
             {
        img : 'https://bloganchoi.com/wp-content/uploads/2024/07/hao-quang-lyrics-anh-trai-say-hi-2.jpg',
        name : 'Hào Quang',
        artist : 'DUONG DOMIC x PHAP KIEU x RHYDER',
        music : 'music/43.mp3'
    },
  
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/4/a/c/d4acc6335d41bd7164173312c6123706.jpg',
        name : 'Exit Sign',
        artist : 'HIEUTHUHAI',
        music : 'music/12.mp3'
    },
      {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/2/9/0/6/2906681d4b764cd4677342b66813f25d.jpg',
        name : 'Bánh Mì Không',
        artist : 'ĐạtG x DuUyên',
        music : 'music/38.mp3'
    },
  
      {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/7/9/3/c/793cb0dc6bf49c1640db7726dcab3504.jpg',
        name : 'CHO MÌNH EM',
        artist : 'BINZ x ĐEN',
        music : 'music/39.mp3'
    },
           {
        img : 'https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/4/f/f/c/4ffc46e45505ee9cdfa872d1e01b6ac1.jpg',
        name : 'Thanh Xuân',
        artist : 'Da LAB',
        music : 'music/40.mp3'
    },
     {
        img : 'https://avatar-ex-swe.nixcdn.com/song/2017/12/06/8/d/5/c/1512535669177_640.jpg',
        name : 'Đường Một Chiều',
        artist : 'Huỳnh Tú ft. Magazine',
        music : 'music/42.mp3'
    },
    {
        img : 'images/1.jpg',
        name : 'Anh Tự Do Nhưng Cô Đơn',
        artist : 'Trung Quân x Quân A.P',
        music : 'music/1.mp3'
    },
                        {
        img : 'https://i.ytimg.com/vi/tAaUbRt6jqM/maxresdefault.jpg',
        name : 'Thương Em Là Điều Anh Không Thể Ngờ',
        artist : 'Noo Phước Thịnh',
        music : 'music/36.mp3'
    },
        {
        img : 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/8/9/1/7891192272603151346a5e22f0fb532d.jpg',
        name : 'Nàng Thơ x Trời Giấu Trời Mang Đi',
        artist : 'AMEE & Hoàng Dũng',
        music : 'music/26.mp3'
    },
       {
        img : 'https://photo-resize-zmp3.zmdcdn.me/w256_r1x1_jpeg/covers/3/2/3221f5d6cb0c1d3edc1d29b6bde2c76c_1475120354.jpg',
        name : 'Mình Là Gì Của Nhau',
        artist : 'Lou Hoàng',
        music : 'music/37.mp3'
    },
         {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/5/6/5/1/5651a16e61472b25af4af405a8c3df2c.jpg',
        name : 'Còn Gì Đau Hơn Chữ Đã Từng',
        artist : 'Quân A.P',
        music : 'music/31.mp3'
    },
             {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/4/f/4f33a5712c26714f0a1e7177d0b4129d_1509608464.jpg',
        name : 'Em Ngày Xưa Khác Rồi',
        artist : 'Hiền Hồ',
        music : 'music/32.mp3'
    },
        {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/1/c/3/b/1c3b6283e28b9030d8f6410b210bd765.jpg',
        name : 'bao tiền một mớ bình yên?',
        artist : '14 Casper & Bon Nghiêm',
        music : 'music/23.mp3'
    },
            {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/c/c/ccba0ba0430c375e16e95309cd534c09_1492130923.jpg',
        name : 'Yêu Là "Tha Thu"',
        artist : 'OnlyC',
        music : 'music/29.mp3'
    },
                {
        img : 'https://i.ytimg.com/vi/u7ScW1kCgS0/maxresdefault.jpg',
        name : 'CÔ ĐƠN TRÊN SOFA',
        artist : 'Hồ Ngọc Hà x Tăng Duy Tân',
        music : 'music/30.mp3'
    },
    {
        img : 'images/3.jpg',
        name : 'Cánh Đồng Yêu Thương',
        artist : 'Trung Quân',
        music : 'music/2.mp3'
    },
        {
        img : 'https://phunuvietnam.mediacdn.vn/media/news/eb530d951695112cf80ff651371ceb38/3.jpg',
        name : 'Chờ Anh Nhé',
        artist : 'Hoàng Dũng',
        music : 'music/22.mp3'
    },
      {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/b/8/5/3/b85394026ee63615034fc1ae1dd8d356.jpg',
        name : 'Mơ',
        artist : 'Vũ Cát Tường',
        music : 'music/33.mp3'
    },
        {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/0/b/b/5/0bb55eaf1f19451a075759258eab718d.jpg',
        name : 'Người Thương Cũng Hóa Người Dưng',
        artist : 'Hiền Hồ',
        music : 'music/28.mp3'
    },
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg',
        name : 'Bông Hoa Đẹp Nhất',
        artist : 'Quân A.P',
        music : 'music/9.mp3'
    },
       {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/e/5/7/de5758f237bb5588e729cdced3a76265.jpg',
        name : 'Ex’s Hate Me',
        artist : 'AMEE x B RAY',
        music : 'music/21.mp3'
    },
           {
        img : 'https://avatar-ex-swe.nixcdn.com/song/2018/01/26/1/8/9/0/1516930244148_640.jpg',
        name : 'LẠ LÙNG',
        artist : 'Vũ.',
        music : 'music/27.mp3'
    },
           {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/8/b/6/0/8b60c63bca80097a24b834bdb2400bf2.jpg',
        name : 'Mãi Mãi Không Phải Anh',
        artist : 'Thanh Bình',
        music : 'music/24.mp3'
    },
               {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/9/7/f/a/97fa122b55eefd723d7b97f887ee8786.jpg',
        name : 'Hết Thương Cạn Nhớ',
        artist : 'Duc Phuc',
        music : 'music/25.mp3'
    },
      {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg',
        name : 'Chạm Khẽ Tim Anh Một Chút Thôi',
        artist : 'Noo Phước Thịnh',
        music : 'music/4.mp3'
    },
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/e/1/dfe1b0ba17097b5aae480926155482ec.jpg',
        name : 'Lưu Luyến Sau Chia Tay',
        artist : 'Try92 ft. Kai06',
        music : 'music/10.mp3'
    },
    {
        img : 'https://avatar-ex-swe.nixcdn.com/song/2024/04/10/4/e/b/2/1712722848851_640.jpg',
        name : 'Tội Cho Em',
        artist : 'Hà Nhi',
        music : 'music/11.mp3'
    },
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/2/e/c/d2ec072766d5af25fdeec55be78c6f79.jpg',
        name : 'Nổi Gió lên',
        artist : 'Phan Như Thùy',
        music : 'music/3.mp3'
    },
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/8/0/6/7/80677a86fdcee35d96f0047c7addcc7c.jpg',
        name : 'Lời Xin Lỗi Vụng Vế',
        artist : 'Quân A.P',
        music : 'music/8.mp3'
    },
    {
        img : 'https://i.ytimg.com/vi/rJabgOChWiM/maxresdefault.jpg',
        name : 'Khóa Ly Biệt',
        artist : 'Anh Tú',
        music : 'music/18.mp3'
    },
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/0/d/0d1fe0b30a319e56dce058a2b30f37d7_1503588020.jpg',
        name : 'Chiều Hôm Ấy',
        artist : 'JayKii',
        music : 'music/7.mp3'
    },  
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/c/5/4/d/c54df0e46c902b5b43602c57c2b77df4.jpg',
        name : '24H',
        artist : 'Lyly, Magazine',
        music : 'music/19.mp3'
    },  
    {
        img : 'https://i.scdn.co/image/ab67616d00001e021be0834566aefd6c0ea9e9c4',
        name : 'Hẹn Một Mai',
        artist : 'Bùi Anh Tuấn',
        music : 'music/20.mp3'
    },  
    {
        img : 'https://i1.sndcdn.com/artworks-9IDCoI1xQjS7Y1Tr-0JZWFQ-t500x500.jpg',
        name : 'Vùng Kí Ức (feat. Hippohappy)',
        artist : 'Chillies',
        music : 'music/13.mp3'
    },
    {
        img : 'https://i1.sndcdn.com/artworks-000125406918-vc8ej9-t500x500.jpg',
        name : 'Âm Thầm Bên Em',
        artist : 'Son Tung M-TP',
        music : 'music/14.mp3'
    },
    {
        img : 'https://kenh14cdn.com/zoom/594_371/203336854389633024/2020/11/18/photo1605678635310-16056786358041011136893.png',
        name : 'Chim Sẻ Và Dâu Tây',
        artist : 'Dế Choắt (DC), Wowy, NAOMI',
        music : 'music/17.mp3'
    },
    {
        img : 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/5/4/8/e/548ebf004852b5e6887fb3f8861115c1.jpg',
        name : 'Bạn Đời',
        artist : 'KARIK (FT. GDUCKY)',
        music : 'music/15.mp3'
    },
    {
        img : 'https://avatar-ex-swe.nixcdn.com/song/2022/12/20/5/6/7/f/1671530957863_640.jpg',
        name : 'Một Đời',
        artist : '14 Casper & Bon Nghiêm (feat. buitruonglinh)',
        music : 'music/5.mp3'
    },
    {
    img : 'https://images.genius.com/2d677ae351848c873d72d7747cd592a4.1000x1000x1.jpg',
    name : 'Ngày Đầu Sau Chia Tay',
    artist : 'ĐỨC PHÚC x KHẮC HƯNG',
    music : 'music/16.mp3'
    },
    {
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXI5HRPjNaZnQMxi_KfozckVB7yHTVDVK0Fw&s',
        name : 'Vì Em Chưa Bao Giờ Khóc',
        artist : 'Hà Nhi',
        music : 'music/6.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
