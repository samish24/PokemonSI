const button = document.getElementById("Addnote");
const input = document.getElementById("note");
const ul = document.getElementById("ul");
const div = document.getElementById("child-div");

button.addEventListener("click", () => {
  const text = input.value;
  const note = creatnote(text);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "border-2",
    "border-orange-400",
    "p-1",
    "m-1",
    "hover:bg-red-400",
    "ml",
    "rounded-md"
  );
  deleteButton.id = "deleteButton";
  deleteButton.textContent = "Delete";
  note.appendChild(deleteButton);
  ul.appendChild(note);
  div.appendChild(ul);
  input.value = "";
});
function creatnote(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.style.display = "none";
  }
});
console.log(document);

//   if (e.target.classList.contains("Delete")) {

//____________________________________________________________HEY__________________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  const container2 = document.getElementById("container-2");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    container2.innerHTML =
      "<p class='text-gray-500 text-center w-full'>No favorite Pokémon yet!</p>";
  } else {
    favorites.forEach((pokemon) => {
      const pokemonCard = document.createElement("div");
      pokemonCard.className =
        "border-2 h-80 border-orange-500 w-72 m-3 p-3 flex flex-col items-center";

      pokemonCard.innerHTML = `
        <img src="${pokemon.sprite}" alt="${pokemon.name}" class="h-40 w-40 object-contain mb-4">
        <h2 class="text-xl capitalize font-bold text-orange-500">${pokemon.name}</h2>
        <p class="mt-2">Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        
      `;

      container2.appendChild(pokemonCard);
    });
  }
});
