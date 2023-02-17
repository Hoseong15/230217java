const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
}

function paintGreetings(username) {
  // h1태그에 인사말을 넣는다.
  greeting.innerText=`Hello ${username}`;
  // h1태그의 hidden 속성을 지운다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// const savedUsername = localStorage.setItem('username', 'smith')
const savedUsername = localStorage.getItem(USERNAME_KEY)
console.log(savedUsername)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}