const song = document.getElementById("song");
const playPauseBtn = document.getElementById("play-pause-btn");
const songRange = document.getElementById("song-range");

song.onloadedmetadata = function () {
  songRange.max = song.duration;
  songRange.value = song.currentTime;
};

playPauseBtn.addEventListener("click", playPauseSong);
songRange.addEventListener("input", (e) => {
  //   console.log(songRange.value);
  song.currentTime = songRange.value;
});

function playPauseSong(e) {
  let icon;
  if (e.target.tagName === "I") {
    icon = e.target;
  } else {
    icon = e.target.querySelector("i");
  }

  if (icon.classList.contains("fa-play")) {
    song.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    song.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

setInterval(() => {
  songRange.value = song.currentTime;
  // if (songRange.value === songRange.max) {
  //   songRange.value = 0;
  // }
}, 500);
