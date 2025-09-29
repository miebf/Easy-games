const games = [
  {
    name: "This Game",
    folder: "This-game",
    //thumbnail: "This-game/assets/thumbnail.png", // Make a small preview image
    description: "Collect the key and find the right room!"
  },
  {
    name: "Another Game",
    folder: "Another-game",
    //thumbnail: "Another-game/assets/thumbnail.png",
    description: "Another cool adventure!"
  }
];

const list = document.getElementById("game-list");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <img src="${game.thumbnail}" alt="${game.name}">
    <h2>${game.name}</h2>
    <p>${game.description}</p>
  `;

  card.addEventListener("click", () => {
    window.location.href = `${game.folder}/index.html`;
  });

  list.appendChild(card);
});
