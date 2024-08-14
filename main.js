const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');
//
searchButton.addEventListener('click', async () => {
    const pokemonName = searchInput.value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (response.ok) {
        const pokemonData = await response.json();
        displayPokemon(pokemonData);
    } else {
        alert('Pokemon not found!');
    }
});
//
async function displayPokemon(pokemonData) {
    const pokemonCard = document.createElement('div');
    pokemonCard.className = 'border p-4 rounded';
    pokemonCard.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="w-32 h-32">
        <h2 class="text-xl">${pokemonData.name}</h2>
        <p>Height: ${pokemonData.height}</p>
        <p>Weight: ${pokemonData.weight}</p>
        <button class="mt-2 bg-green-500 text-white p-1" onclick="addToFavorites(${pokemonData.id}, '${pokemonData.name}', '${pokemonData.sprites.front_default}', ${pokemonData.height}, ${pokemonData.weight})">Add to Favorites</button>
    `;
    resultsDiv.appendChild(pokemonCard);
}
//
