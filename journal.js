// window.addEventListener("load",showtext);
// const button = document.getElementById("Addnote");
// const input = document.getElementById("note");
// const ul = document.getElementById("ul");
// const div = document.getElementById("child-div");
// let texts;
// if (!localStorage.getItem("text")) {
//   texts = [];
// } else {
//   texts = gettexts();
// }

// button.addEventListener("click", () => {
//   const text = input.value;
//   const note = creatnote(text);
//   const deleteButton = document.createElement("button");
//   deleteButton.classList.add(
//     "border-2",
//     "border-orange-400",
//     "p-1",
//     "m-1",
//     "hover:bg-red-400",
//     "ml",
//     "rounded-md"
//   );
//   savetext(text);
//   deleteButton.id = "deleteButton";
//   deleteButton.textContent = "Delete";
//   note.appendChild(deleteButton);
//   ul.appendChild(note);
//   div.appendChild(ul);
//   input.value = "";
// });
// function creatnote(text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   return li;
// }
// ul.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     e.target.parentElement.style.display = "none";
//   }
// });
// function savetext(text) {
//   texts.push(text);
//   localStorage.setItem("text", texts);
// }
// function gettexts() {
//   return localStorage.getItem("text").split(",");
// }
// function showtext() {
//   for (const task_text of gettexts) {
//     addNote(task_text);
//   }
// }


// const button = document.getElementById("Addnote");
// const input = document.getElementById("note");
// const ul = document.getElementById("ul");
// const div = document.getElementById("child-div");
// let texts;

// if (!localStorage.getItem("text")) {
//   texts = [];
// } else {
//   texts = gettexts();
// }

// button.addEventListener("click", () => {
//   const text = input.value;
//   addNote(text);
//   input.value = "";
// });

// function addNote(text) {
//   const note = createNoteElement(text);
//   ul.appendChild(note);
//   texts.push(text);
//   localStorage.setItem("text", texts);
// }

// function createNoteElement(text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   const deleteButton = createDeleteButton();
//   li.appendChild(deleteButton);
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
//     e.target.parentElement.style.display = "none";
//   }
// });

// function gettexts() {
//   return localStorage.getItem("text").split(",");
// }

// function showtext() {
//   for (const task_text of gettexts()) {
//     addNote(task_text);
//   }
// }

// showtext();




// window.addEventListener("load", showtext);

// const button = document.getElementById("Addnote");
// const input = document.getElementById("note");
// const ul = document.getElementById("ul");
// const div = document.getElementById("child-div");


// if (!localStorage.getItem("text")) {
//   texts = [];
// } else {
//   texts = gettexts();
// }

// button.addEventListener("click", () => {
//   const text = input.value;
//   addNote(text);
//   input.value = "";
// });

// function addNote(text) {
//   const note = creatnote(text);
//   const deleteButton = createDeleteButton();
//   note.appendChild(deleteButton);
//   ul.appendChild(note);
//   div.appendChild(ul);
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
//     const text = e.target.parentElement.textContent;
//     removeText(text);
//     e.target.parentElement.style.display = "none";
//   }
// });

// function savetext(text) {
//   texts.push(text);
//   localStorage.setItem("text", JSON.stringify(texts));
// }

// function gettexts() {
//   return localStorage.getItem("text").split(',');
// }

// function removeText(text) {
//   const index = texts.indexOf(text);
//   if (index !== -1) {
//     texts.splice(index, 1);
//     localStorage.setItem("text", JSON.stringify(texts));
//   }
// }

// function showtext() {
//   for (const task_text of gettexts()) {
//     addNote(task_text);
//   }
// }
window.addEventListener("load", showtext);

const button = document.getElementById("Addnote");
const input = document.getElementById("note");
const ul = document.getElementById("ul");
const div = document.getElementById("child-div");

let texts = localStorage.getItem("text") ? gettexts() : [];

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    addNote(text);
    input.value = "";
  }
});

function addNote(text) {
  const note = creatnote(text);
  const deleteButton = createDeleteButton();
  note.appendChild(deleteButton);
  ul.appendChild(note);
  savetext(text);
}

function creatnote(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function createDeleteButton() {
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

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const noteElement = e.target.parentElement;
    const text = noteElement.firstChild.textContent;
    removeText(text);
    ul.removeChild(noteElement);
  }
});

function savetext(text) {
  texts.push(text);
  localStorage.setItem("text", JSON.stringify(texts));
}

function gettexts() {
  try {
    const storedTexts = JSON.parse(localStorage.getItem("text"));
    return Array.isArray(storedTexts) ? storedTexts : [];
  } catch (error) {
    console.error("Failed to parse text from localStorage", error);
    return [];
  }
}

function removeText(text) {
  const index = texts.indexOf(text);
  if (index !== -1) {
    texts.splice(index, 1);
    localStorage.setItem("text", JSON.stringify(texts));
  }
}

function showtext() {
  for (const task_text of texts) {
    addNote(task_text);
  }
}
