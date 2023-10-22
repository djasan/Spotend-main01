import { catalogue } from "./modules/catalogue";
import { slider } from "./modules/slider.js";
import { playlist } from "./modules/playlist.js";
import { audio } from "./modules/audio.js";

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause");
const audioElement = document.getElementById("audio");

let currentTrack = 0;
let isPlaying = false;
let track = null;
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");



function togglePlayPause() {
  if (isPlaying) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
  isPlaying = !isPlaying;
  updatePlayPauseButton();
}

function updatePlayPauseButton() {
  playPause.textContent = isPlaying ? "Pause" : "Play";
}

prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  audio("pause");
  audio("init");
  audio("play");
  isPlaying = true;
  updatePlayPauseButton();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
  slider("next");
  audio("pause");
  audio("init");
  audio("play");
  isPlaying = true;
  updatePlayPauseButton();
});



slides[currentIndex].querySelector("audio").play();

slider("init");
audio("init");
playlist();




