const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");
// fetch datai and search
searchButton.addEventListener("click", async () => {
  const pokemonName = searchInput.value.toLowerCase();
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (response.ok) {
    const pokemonData = await response.json();
    displayPokemon(pokemonData);
  } else {
    alert("Pokemon not found!");
  }
});
// html cod for fetch datai
async function displayPokemon(pokemonData) {
  const pokemonCard = document.createElement("div");
  pokemonCard.className =
    "border-2 h-80 border-orange-500 w-80 m-3 p-3 flex flex-col items-center";

  pokemonCard.innerHTML = `
    <img src="${pokemonData.sprites.other.showdown.front_shiny}" alt="${pokemonData.name}" class="h-40 w-40 object-contain mb-4">
    <h2 class="text-xl capitalize font-bold text-orange-500">${pokemonData.name}</h2>
    <p class="mt-2">Height: ${pokemonData.height}</p>
    <p>Weight: ${pokemonData.weight}</p>
    <button class="mt-2 bg-green-500 text-white p-1 rounded-md">Add to Favorites</button>
  `;
  pokemonCard.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-lg",
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "text-center"
  );

  // button cod für speichern
  const addButton = pokemonCard.querySelector("button");
  addButton.addEventListener("click", () => {
    addToFavorites(
      pokemonData.id,
      pokemonData.name,
      pokemonData.sprites.front_default,
      pokemonData.height,
      pokemonData.weight
    );
  });

  resultsDiv.appendChild(pokemonCard);
}

//________________________________________________________________________________________________________________
// render in html datai
function addToFavorites(id, name, sprite, height, weight) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const newFavorite = {
    id: id,
    name: name,
    sprite: sprite,
    height: height,
    weight: weight,
  };

  if (!favorites.some((pokemon) => pokemon.id === id)) {
    favorites.push(newFavorite);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(`${name} has been added to your favorites!`);
  } else {
    alert(`${name} is already in your favorites!`);
  }
}
