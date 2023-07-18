const todoForm: HTMLElement | null = document.querySelector("#todo-form");
const todoInput: HTMLInputElement | null =
  document.querySelector("#todo-input");
const todoUl: HTMLElement | null = document.querySelector("#todo-ul");

todoInput.setAttribute(
  "size",
  todoInput.getAttribute("placeholder").length.toString()
);

interface Todo {
  txt: string;
  id: string;
}

let localArray: Todo[] = [];

function deleteTodo(event: MouseEvent) {
  const li = (event.target as HTMLButtonElement).parentElement;
  const newArray = localArray.filter((element) => element.id !== li.id);
  localArray = newArray;
  setLocal();
  li.remove();
}

function forId(userTodo: string) {
  const todoObject: Todo = {
    txt: userTodo,
    id: Date.now().toString(),
  };
  localArray.push(todoObject);
  painting(todoObject);
  setLocal();
}

function painting(todoObject: Todo) {
  const todoLI = document.createElement("li");
  todoLI.classList.add("todo-Li");
  const todoSpan = document.createElement("span");
  todoSpan.classList.add("todo-text");
  const todoButton = document.createElement("button");
  todoButton.addEventListener("click", deleteTodo);

  todoLI.id = todoObject.id.toString();
  todoSpan.innerText = todoObject.txt;

  todoButton.innerText = "❌";
  todoUl.appendChild(todoLI);
  todoLI.appendChild(todoSpan);
  todoLI.appendChild(todoButton);
}

function todoList(): void {
  const userTodo = todoInput.value;
  todoInput.value = "";

  forId(userTodo);
}

function prevent(event: Event) {
  event.preventDefault();
  todoList();
}

function setLocal(): void {
  window.localStorage.setItem("todolist", JSON.stringify(localArray));
}

todoForm.addEventListener("submit", prevent);

function getLocal() {
  localArray = JSON.parse(window.localStorage.getItem("todolist") || "[]");
  localArray.forEach(painting);
}

const localForIf = window.localStorage.getItem("todolist");

if (localForIf !== null) {
  getLocal();
}
