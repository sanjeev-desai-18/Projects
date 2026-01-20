const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.getElementById("todo-list");
const checkmarkBtn = document.getElementById("checkmark-btn");
const todoText = document.getElementById("todo-text");
const deleteBtn = document.getElementById("delete-btn");

const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

addBtn.addEventListener("click", addTodo);

function addTodo() {
  // console.log("Enter...");
  const todo = todoInput.value.trim();
  if (!todo) {
    alert("Please add a task");
    return;
  }

  const todoObject = {
    text: todo,
    completed: false,
  };

  todoArray.push(todoObject);

  localStorage.setItem("todoArray", JSON.stringify(todoArray));
  todoInput.value = "";

  renderTodo();
}

function renderTodo() {
  todoList.innerHTML = "";
  if (todoArray.length === 0) {
    return;
  }

  todoArray.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.completed === true) {
      li.classList.add("completed");
    }
    li.innerHTML = ` <div class="icon-text">
              <button id="checkmark-btn">
                <i class="fa-solid fa-check"></i>
              </button>
              <p id="todo-text">${todo.text}</p>
            </div>
            <button id="delete-btn"><i class="fa-solid fa-x"></i></button>`;

    li.querySelector("#checkmark-btn").addEventListener("click", () => {
      if (li.classList.contains("completed")) {
        li.classList.remove("completed");
        todo.completed = false;
      } else {
        li.classList.add("completed");
        todo.completed = true;
      }
      localStorage.setItem("todoArray", JSON.stringify(todoArray));
      renderTodo();
    });

    li.querySelector("#delete-btn").addEventListener("click", () => {
      todoArray.splice(index, 1);
      localStorage.setItem("todoArray", JSON.stringify(todoArray));

      renderTodo();
    });

    todoList.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", renderTodo);
