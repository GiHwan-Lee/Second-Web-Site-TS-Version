const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.querySelector("#todo-ul");
todoInput.setAttribute("size", todoInput.getAttribute("placeholder").length.toString());
let localArray = [];
function deleteTodo(event) {
    const li = event.target.parentElement;
    const newArray = localArray.filter((element) => element.id !== li.id);
    localArray = newArray;
    setLocal();
    li.remove();
}
function forId(userTodo) {
    const todoObject = {
        txt: userTodo,
        id: Date.now().toString(),
    };
    localArray.push(todoObject);
    painting(todoObject);
    setLocal();
}
function painting(todoObject) {
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
function todoList() {
    const userTodo = todoInput.value;
    todoInput.value = "";
    forId(userTodo);
}
function prevent(event) {
    event.preventDefault();
    todoList();
}
function setLocal() {
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
