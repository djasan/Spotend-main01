import { catalogue } from "./modules/catalogue";
import { slider } from "./modules/slider.js";
import { playlist } from "./modules/playlist.js";
import { audio } from "./modules/audio.js";

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause");
const audioElement = document.getElementById("audio");
const slides = document.querySelectorAll(".slide");
let currentTrack = 0;
let isPlaying = false;
let currentIndex = 0;

audioElement.addEventListener('timeupdate', function() {
  var currentTime = audioElement.currentTime;
  const body = document.body;
  
  audioElement.addEventListener("play", () => {
    // Lorsque la musique commence à jouer, ajoutez la classe d'animation
    body.classList.add("music-rhythm");
  });
  
  audioElement.addEventListener("pause", () => {
    // Lorsque la musique est en pause, supprimez la classe d'animation
    body.classList.remove("music-rhythm");
  });
  // Définissez ici les moments clés de la chanson (en secondes)
  var keyMoments = [2, 12, 24, 36, 48, 60, 72]; // Remplacez ... par les moments clés réels

  for (var i = 0; i < keyMoments.length; i++) {
    if (currentTime >= keyMoments[i] && currentTime < keyMoments[i] + 1) {
      body.classList.add('music-rhythm');
    }
  }

  // Supprimez la classe music-rhythm en dehors des moments clés
  if (!keyMoments.some(function(moment) {
    return currentTime >= moment && currentTime < moment + 1;
  })) {
    body.classList.remove('music-rhythm');
  }
});

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

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
