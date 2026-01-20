const createBtn = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes-container");
const deleteBtns = document.querySelectorAll(".delete-btn");
const notes = document.querySelectorAll(".note");

const STORAGE_KEY = "notes";
const notesArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

createBtn.addEventListener("click", () => {
  const id = Date.now().toString();
  notesArray[id] = "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notesArray));
  createNote(id, "");
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    console.log(e.target.previousElementSibling.id);
    const id = e.target.previousElementSibling.id;
    delete notesArray[id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesArray));
    e.target.closest(".note-group").remove();
  }
});

notesContainer.addEventListener("input", (e) => {
  if (e.target.matches("textarea.note")) {
    const id = e.target.id;
    notesArray[id] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesArray));
  }
});

function createNote(id, text) {
  const noteGroup = document.createElement("div");
  noteGroup.className = "note-group";

  const textArea = document.createElement("textarea");
  textArea.className = "note";
  textArea.id = id;
  textArea.value = text;

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-trash-can", "delete-btn");

  noteGroup.appendChild(textArea);
  noteGroup.appendChild(icon);
  notesContainer.appendChild(noteGroup);
}

function displayNotes() {
  if (!Object.keys(notesArray).length) return;

  notesContainer.innerHTML = "";

  Object.entries(notesArray).forEach(([id, text]) => {
    createNote(id, text);
  });
}

window.addEventListener("DOMContentLoaded", displayNotes);
