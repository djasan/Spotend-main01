const playlist = () => {
  const playlistHTML = document.querySelector("#playlist");
  // Créez la liste de lecture sous forme de liste HTML non ordonnée (ul)
  const ul = document.createElement("ul");

  catalogue.forEach((morceau, index) => {
    const morceauItem = document.createElement("li");
    
    // Créez les éléments pour chaque morceau
    const titreParagraphe = document.createElement("p");
    titreParagraphe.textContent = `Titre: ${morceau.titre}`;
    morceauItem.appendChild(titreParagraphe);

    const artisteParagraphe = document.createElement("p");
    artisteParagraphe.textContent = `Artiste: ${morceau.artiste}`;
    morceauItem.appendChild(artisteParagraphe);

    const genreParagraphe = document.createElement("p");
    genreParagraphe.textContent = `Genre: ${morceau.genre.join(', ')}`;
    morceauItem.appendChild(genreParagraphe);

    const anneeParagraphe = document.createElement("p");
    anneeParagraphe.textContent = `Année: ${morceau.année}`;
    morceauItem.appendChild(anneeParagraphe);

    const coverImage = document.createElement("img");
    coverImage.src = morceau.cover;
    coverImage.alt = `${morceau.titre} - ${morceau.artiste}`;
    morceauItem.appendChild(coverImage);

    const audioPlayer = document.createElement("audio");
    audioPlayer.controls = true;

    const source = document.createElement("source");
    source.src = morceau.audio;
    source.type = "audio/mpeg";

    audioPlayer.appendChild(source);
    morceauItem.appendChild(audioPlayer);

    // Ajoutez l'élément du morceau à la liste non ordonnée
    ul.appendChild(morceauItem);
  });

  // Ajoutez la liste de lecture complète à l'élément #playlist
  playlistHTML.appendChild(ul);
};

export { playlist };


