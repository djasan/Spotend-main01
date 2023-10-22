const sliderHTML = document.querySelector("#slider");
globalThis.coverUrl = "./assets/img/cover/";




  



const slider = (status = "init") => {
  /* console.log("initialisation du slider");
console.dir(catalogue);
console.log(catalogue[0].cover); */ //ou console.log(catalogue[0]["cover"]);

  switch (status) {
    case "init":
      initSlider();
      break;
    case "next":
      nextSlider();
      break;
    case "prev":
        prevSlider();
      break;
    default:
      break;
  }
};

export { slider };


