//   if (e.target.classList.contains("Delete")) {

//____________________________________________________________HEY__________________________________________________________

// document.addEventListener("DOMContentLoaded", () => {
//   const container2 = document.getElementById("container-2");

//   const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//   if (favorites.length === 0) {
//     container2.innerHTML =
//       "<p class='text-gray-500 text-center w-full'>No favorite Pokémon yet!</p>";
//   } else {
//     favorites.forEach((pokemon) => {
//       const pokemonCard = document.createElement("div");
//       pokemonCard.className =
//         "border-2 h-80 border-orange-500 w-72 m-3 p-3 flex flex-col items-center";

//       pokemonCard.innerHTML = `
//       <div class=" overflow-auto text-center flex items-center justify-center flex-col "    > 
//         <img src="${pokemon.sprite}" alt="${pokemon.name}" class="h-40 w-40 object-contain mb-4 items-center">
//         <h2 class="text-xl capitalize font-bold text-orange-500">${pokemon.name}</h2>
//         <p class="mt-2">Height: ${pokemon.height}</p>
//         <p>Weight: ${pokemon.weight}</p>  
//           <input
//             type="text"
//             maxlength="25"
//             class="border-2 border-orange-400 p-1 m-1 rounded-md"
//             id="note"
//           /><button
//             id="Addnote"
//             class="border-solid border-2 border-orange-500 m-1 p-1 rounded-md"
//           >
//             Add Note
//           </button>
//           <ul id="ul"></ul>
//           </div>
        
        
//       `;

//       container2.appendChild(pokemonCard);
//     });
//   }
// });





// window.addEventListener("load", showtext);

// const button = document.getElementById("Addnote");
// const input = document.getElementById("note");
// const ul = document.getElementById("ul");
// const div = document.getElementById("child-div");

// let texts = localStorage.getItem("text") ? gettexts() : [];

// button.addEventListener("click", () => {
//   const text = input.value.trim();
//   if (text) {
//     addNote(text);
//     input.value = "";
//   }
// });

// function addNote(text) {
//   const note = creatnote(text);
//   const deleteButton = createDeleteButton();
//   note.appendChild(deleteButton);
//   ul.appendChild(note);
//   savetext(text);
// }

// function creatnote(text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   return li;
// }

// function createDeleteButton() {
//   const button = document.createElement("button");
//   button.classList.add(
//     "border-2",
//     "border-orange-400",
//     "p-1",
//     "m-1",
//     "hover:bg-red-400",
//     "ml",
//     "rounded-md"
//   );
//   button.textContent = "Delete";
//   return button;
// }

// ul.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     const noteElement = e.target.parentElement;
//     const text = noteElement.firstChild.textContent;
//     removeText(text);
//     ul.removeChild(noteElement);
//   }
// });

// function savetext(text) {
//   texts.push(text);
//   localStorage.setItem("text", JSON.stringify(texts));
// }

// function gettexts() {
//   try {
//     const storedTexts = JSON.parse(localStorage.getItem("text"));
//     return Array.isArray(storedTexts) ? storedTexts : [];
//   } catch (error) {
//     console.error("Failed to parse text from localStorage", error);
//     return [];
//   }
// }

// function removeText(text) {
//   const index = texts.indexOf(text);
//   if (index !== -1) {
//     texts.splice(index, 1);
//     localStorage.setItem("text", JSON.stringify(texts));
//   }
// }

// function showtext() {
//   for (const task_text of texts) {
//     addNote(task_text);
//   }
// }










document.addEventListener("DOMContentLoaded", () => {
  const container2 = document.getElementById("container-2");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    container2.innerHTML = "<p class='text-gray-500 text-center w-full'>No favorite Pokémon yet!</p>";
  } else {
    favorites.forEach((pokemon) => {
      const pokemonCard = document.createElement("div");
      pokemonCard.className = "border-2 h-80 border-orange-500 w-72 m-3 p-3 flex flex-col items-center";

      // Generate unique IDs
      const noteInputId = `note-${pokemon.name}`;
      const addButtonId = `addnote-${pokemon.name}`;
      const ulId = `ul-${pokemon.name}`;

      pokemonCard.innerHTML = `
      <div class="overflow-auto text-center flex items-center justify-center flex-col"> 
        <img src="${pokemon.sprite}" alt="${pokemon.name}" class="h-40 w-40 object-contain mb-4">
        <h2 class="text-xl capitalize font-bold text-orange-500">${pokemon.name}</h2>
        <p class="mt-2">Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>  
        <input type="text" maxlength="25" class="border-2 border-orange-400 p-1 m-1 rounded-md" id="${noteInputId}" />
        <button id="${addButtonId}" class="border-solid border-2 border-orange-500 m-1 p-1 rounded-md">Add Note</button>
        <ul id="${ulId}"></ul>
      </div>
      `;

      container2.appendChild(pokemonCard);

      const input = document.getElementById(noteInputId);
      const button = document.getElementById(addButtonId);
      const ul = document.getElementById(ulId);

      let texts = localStorage.getItem(`text-${pokemon.name}`) ? gettexts(pokemon.name) : [];

      button.addEventListener("click", () => {
        const text = input.value.trim();
        if (text) {
          addNoteToCard(text, ul, pokemon.name);
          input.value = "";
        }
      });

      ul.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
          const noteElement = e.target.parentElement;
          const text = noteElement.firstChild.textContent;
          removeText(text, pokemon.name);
          ul.removeChild(noteElement);
        }
      });

      function addNoteToCard(text, ulElement, pokemonName) {
        const note = createNoteElement(text);
        const deleteButton = createDeleteButtonElement();
        note.appendChild(deleteButton);
        ulElement.appendChild(note);
        saveText(text, pokemonName);
      }

      function createNoteElement(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
      }

      function createDeleteButtonElement() {
        const button = document.createElement("button");
        button.classList.add(
          "border-2",
          "border-orange-400",
          "p-1",
          "m-1",
          "hover:bg-red-400",
          "ml",
          "rounded-md"
        );
        button.textContent = "Delete";
        return button;
      }

      function saveText(text, pokemonName) {
        texts.push(text);
        localStorage.setItem(`text-${pokemonName}`, JSON.stringify(texts));
      }

      function gettexts(pokemonName) {
        try {
          const storedTexts = JSON.parse(localStorage.getItem(`text-${pokemonName}`));
          return Array.isArray(storedTexts) ? storedTexts : [];
        } catch (error) {
          console.error("Failed to parse text from localStorage", error);
          return [];
        }
      }

      function removeText(text, pokemonName) {
        const index = texts.indexOf(text);
        if (index !== -1) {
          texts.splice(index, 1);
          localStorage.setItem(`text-${pokemonName}`, JSON.stringify(texts));
        }
      }

      // Display stored notes on load
      texts.forEach((note) => addNoteToCard(note, ul, pokemon.name));
    });
  }
});