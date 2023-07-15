const divId: HTMLElement | null = document.querySelector("#inputBox");
const inputBox: HTMLInputElement | null =
  document.querySelector("#inputBox input");
const button: HTMLButtonElement | null =
  document.querySelector("#inputBox button");
const form: HTMLElement | null = document.querySelector("#form");
const h2: HTMLElement | null = document.querySelector("#h2");

function LogInButton(event: Event): void {
  event.preventDefault();
  if (inputBox && button && h2) {
    inputBox.classList.add("hidden");
    button.classList.add("hidden");
    const userName: string = inputBox.value;
    h2.innerText = `Hello ${userName}`;
    window.localStorage.setItem("username", userName);
  } else {
    throw new Error("Could not find inputBox, button or h2");
  }
}

function localSet(): void {
  const userName2: string | null = window.localStorage.getItem("username");
  if (h2 && inputBox && button) {
    h2.innerText = `Hello ${userName2}`;
    inputBox.classList.add("hidden");
    button.classList.add("hidden");
  }
}

const userName3: string | null = window.localStorage.getItem("username");

if (userName3 === null) {
  if (form) {
    form.addEventListener("submit", LogInButton);
  } else {
    throw new Error("Could not find form");
  }
} else {
  localSet();
}
