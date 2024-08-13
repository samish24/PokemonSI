const button = document.getElementById("Addnote");
const input = document.getElementById("note");
const ul = document.getElementById("ul");
const div = document.getElementById("child-div")

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
  div.appendChild(ul)
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
