// 페이지의 여러 요소에 대한 참조를 가져옵니다.
const divId = document.querySelector("#inputBox");
const inputBox = document.querySelector("#inputBox input");
const button = document.querySelector("#inputBox button");
const form = document.querySelector("#form");
const h2 = document.querySelector("#h2");
// 로그인 버튼을 눌렀을 때의 동작을 정의합니다.
function LogInButton(event) {
    event.preventDefault();
    if (inputBox && button && h2) {
        // 사용자 이름 입력 필드와 버튼을 숨깁니다.
        inputBox.classList.add("hidden");
        button.classList.add("hidden");
        // 사용자 이름을 가져와 환영 메시지를 설정하고 로컬 스토리지에 저장합니다.
        const userName = inputBox.value;
        h2.innerText = `Hello ${userName}`;
        window.localStorage.setItem("username", userName);
    }
    else {
        throw new Error("Could not find inputBox, button or h2");
    }
}
// 로컬 스토리지에서 사용자 이름을 가져와 화면에 표시합니다.
function localSet() {
    const userName2 = window.localStorage.getItem("username");
    if (h2 && inputBox && button) {
        h2.innerText = `Hello ${userName2}`;
        inputBox.classList.add("hidden");
        button.classList.add("hidden");
    }
}
// 페이지 로드 시에 로컬 스토리지를 확인하여 이전에 로그인한 사용자가 있는지 확인합니다.
const userName3 = window.localStorage.getItem("username");
if (userName3 === null) {
    // 이전에 로그인한 사용자가 없는 경우, 로그인 버튼에 이벤트 리스너를 추가합니다.
    if (form) {
        form.addEventListener("submit", LogInButton);
    }
    else {
        throw new Error("Could not find form");
    }
}
else {
    // 이전에 로그인한 사용자가 있는 경우, 해당 사용자의 정보를 화면에 표시합니다.
    localSet();
}
