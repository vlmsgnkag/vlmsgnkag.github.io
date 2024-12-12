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
          name: "PLAYLIST Tổ Quốc",
          artist: "QTrung,Japandee,AnhVu,KhoaBT X Twen",
          cover: "https://i.pinimg.com/564x/a3/45/a9/a345a9498ef7630f522d22647738c729.jpg",
          source: "https://audio.jukehost.co.uk/8lvKoV82XcSXmMwevFMNgjPQGtmluRxO",
          url: "https://www.youtube.com/watch?v=SVFATb8Q2OE",
          favorited: true
        },
        {
          name: "Nonstop 2021 Vinahouse",
          artist: "DJ Thai Hoang Full Track",
          cover: "https://i.pinimg.com/236x/7e/75/33/7e75335f313ff3a8812224c0e0fc89cd.jpg",
          source: "https://media1.vocaroo.com/mp3/1lij0rfthUSn",
          url: "https://www.youtube.com/watch?v=ualSK9XsZ4o",
          favorited: true
        },
        {
          name: "Vợ người ta ",
          artist: "Vocal Phan Mạnh Quỳnh",
          cover: "https://i.pinimg.com/originals/bb/80/94/bb80944d27b353f34d8c8777ec3b2b99.gif",
          source: "https://od.lk/s/MzZfODEyMzM5OTRf/V%E1%BB%A3%20Ng%C6%B0%E1%BB%9Di%20Ta%20Remix.mp3",
          url: "https://youtu.be/l38C4YQjkV0?si=hvZvOs-jCyrmcH5U",
          favorited: true
        },
        {
          name: "Phố Đã Lên Đèn",
          artist: "Thanh Phong Remix",
          cover: "https://i.pinimg.com/originals/31/4f/8d/314f8d0289c133eb37038e7cfe319c5e.gif",
          source: "https://od.lk/d/MzZfODEyMzM5NTlf/Huye%CC%82%CC%80n%20Ta%CC%82m%20Mo%CC%82n%20%E2%80%A2%20%5B%20TP%20%5D%20Pho%CC%82%CC%81%20%C4%90a%CC%83%20Le%CC%82n%20%C4%90e%CC%80n%20-%20Thanh%20Phong%20Remix%20%28%20Chi%CC%81nh%20Chu%CC%89%20Up%20%29.mp3",
          url: "https://youtu.be/bhlMOw-RGZo?si=-ZaMf23Uh7_uxVHO",
          favorited: true
        },

        {
          name: "Anh Tự Do Nhưng Cô Đơn",
          artist: "TRUNG QUÂN x ĐẠT G",
          cover: "https://i.pinimg.com/originals/90/09/5e/90095e765e512e2504b32ca92ec923f3.gif",
          source: "https://od.lk/s/MzZfODEyMzM5Mjhf/Anh%20Tu%20Do%20Nhung%20Don%20Coi%20remix.mp3",
          url: "https://youtu.be/MEnLvSuApU8?si=7oBa_2MLl80Wv3ER",
          favorited: true
        },

        {
          name: "Tự Em Sai",
          artist: "VT x NESS REMIX",
          cover: "https://i.pinimg.com/originals/90/09/5e/90095e765e512e2504b32ca92ec923f3.gif",
          source: "https://od.lk/s/MzZfODEyMzM5ODVf/T%E1%BB%B1%20Em%20Sai%20%28VT%20x%20NESS%20REMIX%29%20-%20Linh%20H%C6%B0%C6%A1ng%20Luz%20x%20IC%20Music%20%28320%20kbps%29.mp3",
          url: "https://youtu.be/MEnLvSuApU8?si=7oBa_2MLl80Wv3ER",
          favorited: true
        },

        {
          name: "Cánh Đồng Yêu Thương",
          artist: "Nguyễn Hoàng",
          cover: "https://i.pinimg.com/236x/12/15/19/121519d4eb14d4be86e10a93798d5043.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5MzNf/C%C3%A1nh%20%C4%90%E1%BB%93ng%20Y%C3%AAu%20Th%C6%B0%C6%A1ng%20%28Remix%29.mp3",
          url: "https://youtu.be/UJKsgoZL8W4?si=obhQbRDQrKVc_yIo",
          favorited: true
        },

        {
          name: "Một Đời",
          artist: "14Casper x Bon Nghiêm x 2T x ChangC - NVT ft TPhuc",
          cover: "https://i.pinimg.com/736x/50/cd/ac/50cdac210bd63ca334a4f3b531cab960.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5Njdf/M%E1%BB%99t%20%C4%90%E1%BB%9Di%20Remix.mp3",
          url: "https://www.youtube.com/watch?v=JgTZvDbaTtg&pp=ygUMTeG7mXQgxJHhu51p",
          favorited: true
        },

        {
          name: "Cao Ốc 20",
          artist: "Huy PT Remix",
          cover: "https://i.pinimg.com/originals/4b/a5/80/4ba5804e93e89d900ddbf1246c3fb996.gif",
          source: "https://od.lk/s/MzZfODEyMzM5Mzhf/Cao%20O%CC%82%CC%81c%2020%20Full%20Huy%20PT%20Remix%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=FWYrRSWabIs ",
          favorited: true
        },
        {
          name: "Mất Anh Rồi ",
          artist: "Thanh Phong Feat OC.A-Mix",
          cover: "https://i.pinimg.com/originals/de/1f/b9/de1fb999abdab67558677730135290c2.gif",
          source: "remix/Nguye%CC%82%CC%83n%20Tha%CC%A3c%20Ba%CC%89o%20Ngo%CC%A3c%20%E2%80%A2%20[%20TP%20]%20Ma%CC%82%CC%81t%20Anh%20Ro%CC%82%CC%80i%20-%20Thanh%20Phong%20Feat%20OC.A-Mix%20(%20Chi%CC%81nh%20Chu%CC%89%20Up%20).mp3",
          url: "https://www.youtube.com/watch?v=fvmPsv3K8ZE",
          favorited: true
        },
        {
          name: "Chẳng Cần Lý Do",
          artist: "Thái Hoàng Remix",
          cover: "https://i.pinimg.com/originals/9b/39/20/9b39208281412ef7200414d820fc5306.gif",
          source: "remix/Cha%CC%86%CC%89ng%20Ca%CC%82%CC%80n%20Ly%CC%81%20Do%20-%20%20Tha%CC%81i%20Hoa%CC%80ng%20Remix%20_%20Khang%20Vie%CC%A3%CC%82t.mp3",
          url: "https://youtu.be/71sm9o-QZiI?si=VrTW2e5Cv7Swe66A",
          favorited: true
        },
        {
          name: "Chắc Vì Mình Chưa Tốt",
          artist: "Huy PT",
          cover: "https://i.pinimg.com/originals/a6/8d/97/a68d97362758b9320cdcc2b0d1c1f110.gif",
          source: "https://audio.jukehost.co.uk/3OVnXTM2m9pmwUBnWCtB9bxdheJPCirC",
          url: "https://www.youtube.com/watch?v=m-fuWC80KTk",
          favorited: true
        },
        {
          name: "Sóng Gió",
          artist: "Thai Hai FULL Bao Teng _ KUNZZ FIXX",
          cover: "https://i.pinimg.com/originals/19/b8/f2/19b8f2ad4abc49d70950081156095b54.gif",
          source: "https://od.lk/s/MzZfODEyMzM5NDZf/Dat%20-%20Song%20Gio%20-%20Thai%20Hai%20FULL%20Bao%20Teng%20_%20KUNZZ%20FIXX.mp3",
          url: "https://www.youtube.com/watch?v=j8U06veqxdU",
          favorited: true
        },
        {
          name: "Cho Em Gần Anh Thêm Chút Nữa",
          artist: "Thái Hoàng Remix",
          cover: "https://i.pinimg.com/originals/06/72/a7/0672a744d287ee7af00ff6518338946c.gif",
          source: "https://od.lk/s/MzZfODEyMzM5Mjdf/-%20Cho%20Em%20Ga%CC%82%CC%80n%20Anh%20The%CC%82m%20Chu%CC%81t%20Nu%CC%9B%CC%83a%20%20Tha%CC%81i%20Hoa%CC%80ng%20Remix%20%20Hot%20Vie%CC%A3%CC%82t%20Mix_320kbps.mp3",
          url: "https://www.youtube.com/watch?v=CLdHmTWVp2w",
          favorited: true
        },
        {
          name: "Có Anh Ở Đây Rồi",
          artist: "Theron x Ness",
          cover: "https://i.pinimg.com/originals/8b/f3/db/8bf3db3f2eb386e95ab8a63c1ea3d956.gif",
          source: "https://audio.jukehost.co.uk/eDnbzDIJF3YkfPeUYVTgPukRT6HZZmEs",
          url: "https://www.youtube.com/watch?v=oOTDzseGKhU",
          favorited: true
        },
        {
          name: "HÔM QUA TÔI ĐÃ KHÓC",
          artist: "NATRA FT NAM MILO REMIX",
          cover: "https://i.pinimg.com/originals/08/de/07/08de07fc3421d5f843bae8e4f4e12f21.gif",
          source: "https://audio.jukehost.co.uk/gVAMoZaoUkTZmBCSqfb0ASBkqALojoqG",
          url: "https://www.youtube.com/watch?v=QRplerGCPOc",
          favorited: true
        },
        {
          name: "Tay Trái Chỉ Trăng",
          artist: "VRW Remix",
          cover: "https://i.pinimg.com/originals/94/8d/4a/948d4ac2a7d012b5d2e5d1aa32db19aa.gif",
          source: "https://od.lk/s/MzZfODEyMzM5ODBf/Tay%20Tra%CC%81i%20Chi%CC%89%20Tra%CC%86ng%20Upward%20To%20The%20Moon%20VRW%20Remix%20_320kbps.mp3",
          url: "https://www.youtube.com/watch?v=ATPulcGQ2SE",
          favorited: true
        },
        {
          name: "Xin Lỗi Vì Đã Xuất Hiện",
          artist: "Vũ Duy Khánh x AM",
          cover: "https://i.pinimg.com/236x/ea/d8/c2/ead8c2f0b65e013281f102b5f4b52c80.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5OTZf/Xin%20L%E1%BB%97i%20V%C3%AC%20%C4%90%C3%A3%20Xu%E1%BA%A5t%20Hi%E1%BB%87n%20Remix%20-%20V%C5%A9%20Duy%20Kh%C3%A1nh%20x%20AM%20-%20Chuy%E1%BB%87n%20vui%20anh...%20-%20Nh%E1%BA%A1c%20Tr%E1%BA%BB%20Hay%20Nh%E1%BA%A5t%202024.mp3",
          url: "https://www.youtube.com/watch?v=N0ort7baD0o",
          favorited: true
        },
        {
          name: "Trúc Xinh",
          artist: "Theron x Nevi Remix",
          cover: "https://i.pinimg.com/originals/e3/00/1f/e3001f8a2169edd1a99f2fc7cecb3657.gif",
          source: "https://od.lk/s/MzZfODEyMzM5ODRf/Tru%CC%81c%20Xinh%20Theron%20x%20Nevi%20Remix%20%20%20_320kbps.mp3",
          url: "https://www.youtube.com/watch?v=N0ort7baD0o",
          favorited: true
        },
        {
          name: "Giá Như Đời Làm Gì Có Giá Như",
          artist: "Truzg Remix",
          cover: "https://i.pinimg.com/originals/4d/c7/38/4dc738d5c5d122722f29d68773f8f46b.gif",
          source: "https://od.lk/s/MzZfODEyMzM5NThf/Gi%C3%A1%20Nh%C6%B0%20%C4%90%E1%BB%9Di%20L%C3%A0m%20G%C3%AC%20C%C3%B3%20Gi%C3%A1%20Nh%C6%B0%20Remix%20Trend%20Tiktok%20-%20%C4%90%E1%BB%ABng%20H%E1%BB%8Fi%20Em%20%E1%BB%94n%20Kh%C3%B4ng%20Remix%20-%20REMIX%20TIKTOK%202024%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=Mgz_ZKsPoBMs",
          favorited: true
        },
        {
          name: "Lưu luyến sau chia tay",
          artist: "Deekey x NgThAnh x Duc Doanh",
          cover: "https://i.pinimg.com/originals/82/31/9e/82319e7e69fcfc8ac9ad22537efcb27a.gif",
          source: "https://od.lk/s/MzZfODEyMzM5NjZf/L%C6%B0u%20luy%E1%BA%BFn%20sau%20chia%20tay%20-%20Deekey%20x%20NgThAnh%20x%20Duc%20Doanh%20Remix%20-%20B%E1%BA%A3n%20Remix%20Cu%E1%BB%91n%20Nh%E1%BA%A5t%202024%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=5IlGozJypQw",
          favorited: true
        },
        {
          name: "Nếu Ví Anh Như",
          artist: "Đông x Thazh Remix",
          cover: "https://i.pinimg.com/originals/ab/da/25/abda25d2c253502e0d7a4d1f4cc2ff9d.gif",
          source: "https://od.lk/s/MzZfODEyMzM5NzZf/N%E1%BA%BFu%20V%C3%AD%20Anh%20Nh%C6%B0%20-%20%20%C4%90%C3%B4ng%20x%20Thazh-Remix%20-%20%E8%8B%A5%E6%8A%8A%E4%BD%A0-Kirsty%E5%88%98%E7%91%BE%E7%9D%BF-Nh%E1%BA%A1c-Trung-Hot-TikTok-M%E1%BB%9Bi-Nh%E1%BA%A5t-2024.mp3",
          url: "https://youtu.be/ad-0wi7TTd0?si=S_KJuMqG4v6ErixI",
          favorited: true
        },
        {
          name: " Mất Anh Rồi",
          artist: "Thanh Phong Feat OC.A-Mix",
          cover: "https://i.pinimg.com/474x/9c/df/e8/9cdfe82f1fcb7ff0bc41b1015fd6f41f.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5NzZf/N%E1%BA%BFu%20V%C3%AD%20Anh%20Nh%C6%B0%20-%20%20%C4%90%C3%B4ng%20x%20Thazh-Remix%20-%20%E8%8B%A5%E6%8A%8A%E4%BD%A0-Kirsty%E5%88%98%E7%91%BE%E7%9D%BF-Nh%E1%BA%A1c-Trung-Hot-TikTok-M%E1%BB%9Bi-Nh%E1%BA%A5t-2024.mp3",
          url: "https://youtu.be/ad-0wi7TTd0?si=S_KJuMqG4v6ErixI",
          favorited: true
        },
        {
          name: "Đừng Làm Trái Tim Anh Đau ",
          artist: "TNT remix",
          cover: "https://i.pinimg.com/originals/02/4f/5e/024f5eb6bf544c26046d499d2fc11e68.gif",
          source: "https://od.lk/s/MzZfODEyMzM5NTBf/%C4%90%E1%BB%ABng%20l%C3%A0m%20tr%C3%A1i%20tim%20anh%20%C4%91au%20x%20c%C3%B3%20%C4%91%C3%A2u%20ai%20ng%E1%BB%9D%20-%20TNT%20remix%20-%20Nh%E1%BA%A1c%20hot%20tik%20tok%202024%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=abPmZCZZrFA",
          favorited: true
        },
        {
          name: "Đảo Nghịch",
          artist: "Đông x Thazh-Remix",
          cover: "https://i.pinimg.com/originals/8f/c8/0a/8fc80a295bc270456dbd28306c4e8853.gif",
          source: "https://od.lk/s/MzZfODEyMzM5NDVf/%C4%90%E1%BA%A3o%20Ngh%E1%BB%8Bch-Reverse%E6%BA%AF-_%E7%89%88%E9%92%A2%E7%90%B4%20-%20%C4%90%C3%B4ng%20x%20Thazh.mp3",
          url: "https://www.youtube.com/watch?v=zKxZ-DttK-4",
          favorited: true
        },
        {
          name: "Nổi Gió Rồi",
          artist: "HL Harvey Remix",
          cover: "https://i.pinimg.com/originals/84/b8/54/84b85436dae3141ddd9a81a124cd28e8.gif",
          source: "https://od.lk/s/MzZfODEyMzM5Nzhf/N%E1%BB%95i%20Gi%C3%B3%20R%E1%BB%93i%20-%20HL%20Harvey%20Remix%20-%20Nh%E1%BA%A1c%20Hot%20Tik%20Tok%20Remix%20M%E1%BB%9Bi%20Nh%E1%BA%A5t%202023%20%28320%20kbps%29.mp3",
          url: "https://youtu.be/n9iKoJ9ZE-Q?si=NkrumgVjz-ZMPvNa",
          favorited: true
        },
        {
          name: "Forget About Her Full",
          artist: "Dj Thái Hoàng Remix",
          cover: "https://i.pinimg.com/236x/3f/ee/45/3fee45c6035ce991178d1344704598ff.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5NTNf/Forget%20About%20Her%20Full%20-%20Dj%20Th%C3%A1i%20Ho%C3%A0ng%20Remix%20%28320%20kbps%29.mp3",
          url: "https://youtu.be/n9iKoJ9ZE-Q?si=NkrumgVjz-ZMPvNa",
          favorited: true
        },
        {
          name: "CAUSE I LOVE YOU FT GẠT ĐI NƯỚC MẮT",
          artist: "THEREON Remix",
          cover: "https://i.pinimg.com/736x/20/df/03/20df0316d9a69889758766d3f0d1e1b2.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5Mzlf/CAUSE%20I%20LOVE%20YOU%20FT%20G%E1%BA%A0T%20%C4%90I%20N%C6%AF%E1%BB%9AC%20M%E1%BA%AET%20-%20THEREON%20REMIX%20-%20NH%E1%BA%A0C%20REMIX%20HOT%20TIKTOK%20-%20TMK_MUSIC%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=_E-7A81Ac8U",
          favorited: true
        },
        {
          name: "KHÓ VẼ NỤ CƯỜI",
          artist: "THANH PHONG FT OC.A-MIX. Airi",
          cover: "https://i.pinimg.com/736x/1a/f3/0a/1af30a1898da0c6a281b60808403c936.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5NjBf/KH%C3%93%20V%E1%BA%BC%20N%E1%BB%A4%20C%C6%AF%E1%BB%9CI%20-%20%C4%90%E1%BA%A0T%20G%20x%20DU%20UY%C3%8AN.%20%28B%E1%BA%A2N%20FULL%29%20THANH%20PHONG%20FT%20OC.A-MIX.%20Airi%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=z3qOnZIqRVs",
          favorited: true
        },
        {
          name: "Lỗi Tại Anh",
          artist: "Thereon Remix",
          cover: "https://i.pinimg.com/474x/5f/8d/52/5f8d529a034d368c7e9cd6fd513203a9.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5NjBf/KH%C3%93%20V%E1%BA%BC%20N%E1%BB%A4%20C%C6%AF%E1%BB%9CI%20-%20%C4%90%E1%BA%A0T%20G%20x%20DU%20UY%C3%8AN.%20%28B%E1%BA%A2N%20FULL%29%20THANH%20PHONG%20FT%20OC.A-MIX.%20Airi%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=z3qOnZIqRVs",
          favorited: true
        },
        {
          name: "Mưa Tháng Sáu ft. Kissing On My Tatts",
          artist: "Nam Con Remix",
          cover: "https://i.pinimg.com/564x/9d/f9/12/9df912af38f4aa71b13b4d26f5e58e90.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5MTlf/M%C6%B0a%20Th%C3%A1ng%20S%C3%A1u%20ft.%20Kissing%20On%20My%20Tatts%20%28Nam%20Con%20Remix%29%20-%20Hot%20TikTok%202024%20-%20Audio%20Lyrics%20Video%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=_8vekzCF04Q",
          favorited: true
        },
        {
          name: "Thằng Điên",
          artist: "TanBao Remix",
          cover: "https://i.pinimg.com/736x/c8/6a/98/c86a98cddca74a6b359c6ee5037c1294.jpg",
          source: "https://od.lk/s/MzZfODEyMzM5ODJf/Th%E1%BA%B1ng%20%C4%90i%C3%AAn%20-%20Justatee%20ft.%20Ph%C6%B0%C6%A1ng%20Ly%20%28TanBao%20Remix%29%20-%20Tanbao%20Remix%20%28320%20kbps%29.mp3",
          url: "https://www.youtube.com/watch?v=zKxZ-DttK-4&pp=ygUKRGFvIE5naGljaA%3D%3D",
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
