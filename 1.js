const musicList = document.getElementById('music-list');
let now_playing = document.querySelector('.now-playing');
let next_btn = document.querySelector('.next-track');
const fileUpload = document.getElementById('file-upload');
const songTitle = document.getElementById('song-title');new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Co Tat Ca Nhung Thieu Anh",
          artist: "Vocal Huong Ly",
          cover: "https://i.pinimg.com/originals/bb/80/94/bb80944d27b353f34d8c8777ec3b2b99.gif",
          source: "https://d.top4top.io/m_3201hkbci1.mp3",
          url: "https://youtu.be/l38C4YQjkV0?si=hvZvOs-jCyrmcH5U",
          favorited: true
        },
        {
          name: "Phố Đã Lên Đèn",
          artist: "Thanh Phong Remix",
          cover: "https://i.pinimg.com/originals/31/4f/8d/314f8d0289c133eb37038e7cfe319c5e.gif",
          source: "https://i.top4top.io/m_32014gke91.mp3",
          url: "https://youtu.be/bhlMOw-RGZo?si=-ZaMf23Uh7_uxVHO",
          favorited: true
        },

        {
          name: "Anh Tự Do Nhưng Cô Đơn",
          artist: "TRUNG QUÂN x ĐẠT G",
          cover: "https://i.pinimg.com/originals/90/09/5e/90095e765e512e2504b32ca92ec923f3.gif",
          source: "https://e.top4top.io/m_32010l8mo1.mp3",
          url: "https://youtu.be/MEnLvSuApU8?si=7oBa_2MLl80Wv3ER",
          favorited: true
        },

        {
          name: "Cao Ốc 20",
          artist: "Huy PT Remix",
          cover: "https://i.pinimg.com/originals/4b/a5/80/4ba5804e93e89d900ddbf1246c3fb996.gif",
          source: "https://j.top4top.io/m_3201mkh0q1.mp3",
          url: "https://www.youtube.com/watch?v=FWYrRSWabIs ",
          favorited: true
        },
        {
          name: "Mất Anh Rồi ",
          artist: "Thanh Phong Feat OC.A-Mix",
          cover: "https://i.pinimg.com/originals/de/1f/b9/de1fb999abdab67558677730135290c2.gif",
          source: "https://c.top4top.io/m_3201hbhdh1.mp3",
          url: "https://www.youtube.com/watch?v=fvmPsv3K8ZE",
          favorited: true
        },
        {
          name: "Chẳng Cần Lý Do",
          artist: "Thái Hoàng Remix",
          cover: "https://i.pinimg.com/originals/9b/39/20/9b39208281412ef7200414d820fc5306.gif",
          source: "https://k.top4top.io/m_3201jcqlt1.mp3",
          url: "https://youtu.be/71sm9o-QZiI?si=VrTW2e5Cv7Swe66A",
          favorited: true
        },
        {
          name: "Chắc Vì Mình Chưa Tốt",
          artist: "Huy PT",
          cover: "https://i.pinimg.com/originals/a6/8d/97/a68d97362758b9320cdcc2b0d1c1f110.gif",
          source: "https://i.top4top.io/m_3201i0aan1.mp3",
          url: "https://www.youtube.com/watch?v=m-fuWC80KTk",
          favorited: true
        },
        {
          name: "Sóng Gió",
          artist: "Thai Hai FULL Bao Teng _ KUNZZ FIXX",
          cover: "https://i.pinimg.com/originals/19/b8/f2/19b8f2ad4abc49d70950081156095b54.gif",
          source: "https://e.top4top.io/m_320131rbn1.mp3",
          url: "https://www.youtube.com/watch?v=j8U06veqxdU",
          favorited: true
        },
        {
          name: "Cho Em Gần Anh Thêm Chút Nữa",
          artist: "Thái Hoàng Remix",
          cover: "https://i.pinimg.com/originals/06/72/a7/0672a744d287ee7af00ff6518338946c.gif",
          source: "https://e.top4top.io/m_3201frggj1.mp3",
          url: "https://www.youtube.com/watch?v=CLdHmTWVp2w",
          favorited: true
        },
        {
          name: "Có Anh Ở Đây Rồi",
          artist: "Theron x Ness",
          cover: "https://i.pinimg.com/originals/8b/f3/db/8bf3db3f2eb386e95ab8a63c1ea3d956.gif",
          source: "https://g.top4top.io/m_3201t6gd11.mp3",
          url: "https://www.youtube.com/watch?v=oOTDzseGKhU",
          favorited: true
        },
        {
          name: "HÔM QUA TÔI ĐÃ KHÓC",
          artist: "NATRA FT NAM MILO REMIX",
          cover: "https://i.pinimg.com/originals/08/de/07/08de07fc3421d5f843bae8e4f4e12f21.gif",
          source: "https://a.top4top.io/m_3201nnvas1.mp3",
          url: "https://www.youtube.com/watch?v=QRplerGCPOc",
          favorited: true
        },
        {
          name: "Tay Trái Chỉ Trăng",
          artist: "VRW Remix",
          cover: "https://i.pinimg.com/originals/94/8d/4a/948d4ac2a7d012b5d2e5d1aa32db19aa.gif",
          source: "https://i.top4top.io/m_3201mop8l1.mp3",
          url: "https://www.youtube.com/watch?v=ATPulcGQ2SE",
          favorited: true
        },
        {
          name: "Trúc Xinh",
          artist: "Theron x Nevi Remix",
          cover: "https://i.pinimg.com/originals/e3/00/1f/e3001f8a2169edd1a99f2fc7cecb3657.gif",
          source: "https://f.top4top.io/m_32011zg3o1.mp3",
          url: "https://www.youtube.com/watch?v=N0ort7baD0o",
          favorited: true
        },
        {
          name: "Giá Như Đời Làm Gì Có Giá Như",
          artist: "Truzg Remix",
          cover: "https://i.pinimg.com/originals/4d/c7/38/4dc738d5c5d122722f29d68773f8f46b.gif",
          source: "https://c.top4top.io/m_3201m7dsi1.mp3",
          url: "https://www.youtube.com/watch?v=Mgz_ZKsPoBMs",
          favorited: true
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

const songArtist = document.getElementById('song-artist');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const volumeSlider = document.getElementById('volume-slider');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

const songDuration = document.getElementById('song-duration');

let musicIndex = 0;
let musicListArray = [];
// Function to add new music to the list
function addMusicToList(file) {
    let musicItem = document.createElement('li');
    musicItem.innerText = file.name;
    musicList.appendChild(musicItem);
    musicListArray.push(file);
}

// Event listener for file upload
fileUpload.addEventListener('change', function() {
    const files = this.files;
    for (let i = 0; i < files.length; i++) {
        addMusicToList(files[i]);
    }
});

// Function to update the currently playing music
function updateMusicDetails() {
    const music = musicListArray[musicIndex];
    songTitle.innerText = music.name;
    songArtist.innerText = 'Unknown Artist';
    songDuration.innerText = music.duration;
}

// Function to play the current music
function playMusic() {
    const music = musicListArray[musicIndex];
    const musicUrl = URL.createObjectURL(music);
    const audio = new Audio(musicUrl);
    audio.volume = volumeSlider.value / 100;
    audio.play();
    updateMusicDetails();
}

// Function to pause the current music
function pauseMusic() {
    const audio = document.getElementsByTagName('audio')[0];
    audio.pause();
}

// Function to stop the current music
function stopMusic() {
    const audio = document.getElementsByTagName('audio')[0];
    audio.pause();
    audio.currentTime = 0;
}

// Function to play the previous music
function prevMusic() {
    if (musicIndex === 0) {
        musicIndex = musicListArray.length - 1;
    } else {
        musicIndex--;
    }
    stopMusic();
    playMusic();
}

// Function to play the next music
function nextMusic() {
    if (musicIndex === musicListArray.length - 1) {
        musicIndex = 0;
    } else {
        musicIndex++;
    }
    stopMusic();
    playMusic();
}

// Event listener for play button
playBtn.addEventListener('click', function() {
    playMusic();
});

// Event listener for pause button
pauseBtn.addEventListener('click', function() {
    pauseMusic();
});

// Event listener for stop button
stopBtn.addEventListener('click', function() {
    stopMusic();
});

// Event listener for previous button
prevBtn.addEventListener('click', function() {
    prevMusic();
});

// Event listener for next button
nextBtn.addEventListener('click', function() {
    nextMusic();
});

// Event listener for shuffle button
shuffleBtn.addEventListener('click', function() {
    musicIndex = Math.floor(Math.random() * musicListArray.length);
    stopMusic();
    playMusic();
});

// Event listener for repeat button
repeatBtn.addEventListener('click', function() {
    stopMusic();
    playMusic();
});

// Event listener for volume slider
volumeSlider.addEventListener
// Event listener for volume slider
volumeSlider.addEventListener('input', function() {
const audio = document.getElementsByTagName('audio')[0];
audio.volume = this.value / 100;
});

// Function to log in
function login() {
const username = usernameInput.value;
const password = passwordInput.value;
if (username === 'admin' && password === 'password') {
loginForm.style.display = 'none';
} else {
alert('Incorrect username or password');
}
}

// Event listener for login form submit
loginForm.addEventListener('submit', function(event) {
event.preventDefault();
login();
});

// Event listener for music list item click
musicList.addEventListener('click', function(event) {
if (event.target.nodeName === 'LI') {
musicIndex = Array.from(musicList.children).indexOf(event.target);
stopMusic();
playMusic();
}
});


