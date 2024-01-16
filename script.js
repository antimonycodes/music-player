let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playIcon = document.getElementById("play-icon");
let pauseIcon = document.getElementById("pause-icon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  updateIcon(); // Set the initial icon based on the initial state of the audio
};

function playPause() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
  updateIcon(); // Update the icon after toggling play/pause state
}

function updateIcon() {
  playIcon.style.display = song.paused ? "block" : "none";
  pauseIcon.style.display = song.paused ? "none" : "block";
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 100);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
};
