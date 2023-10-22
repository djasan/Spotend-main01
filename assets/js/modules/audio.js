const audio = (status = "init") => {
  const audioUrl = "./assets/audio/";

  switch (status) {
    case "init":
      console.log("Initialisation de la piste audio");
      track = new Audio(audioUrl + catalogue[currentTrack].audio);
      break;
    case "play":
      console.log("Lecture de la piste audio");
      console.dir(track);
      track.play();
      break;
    case "pause":
      console.log("Mise en pause de la piste audio");
      console.dir(track);
      track.pause();
      break;
    default:
      console.log("Erreur dans la fonction audio");
      break;
  }
};
export{audio};