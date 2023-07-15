const divId = document.querySelector("#inputBox");
const inputBox = document.querySelector("#inputBox input");
const button = document.querySelector("#inputBox button");
const form = document.querySelector("#form");
const h2 = document.querySelector("#h2");
function LogInButton(event) {
    event.preventDefault();
    if (inputBox && button && h2) {
        inputBox.classList.add("hidden");
        button.classList.add("hidden");
        const userName = inputBox.value;
        h2.innerText = `Hello ${userName}`;
        window.localStorage.setItem("username", userName);
    }
    else {
        throw new Error("Could not find inputBox, button or h2");
    }
}
function localSet() {
    const userName2 = window.localStorage.getItem("username");
    if (h2 && inputBox && button) {
        h2.innerText = `Hello ${userName2}`;
        inputBox.classList.add("hidden");
        button.classList.add("hidden");
    }
}
const userName3 = window.localStorage.getItem("username");
if (userName3 === null) {
    if (form) {
        form.addEventListener("submit", LogInButton);
    }
    else {
        throw new Error("Could not find form");
    }
}
else {
    localSet();
}
