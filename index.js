const loginForm = document.querySelector("#loginForm");
const todo = document.querySelector("#todo");
const userForm = document.querySelector("#userForm");
const userButton = userForm.querySelector("input:nth-child(2)");
const userName = userForm.querySelector("input:nth-child(1)");
const greeting = document.querySelector("#greeting");
const greeting_div = document.querySelector("#greeting_div");
const body = document.querySelector("body");

const randomNum = Math.floor(Math.random() * 2);
const arr = ["./image/animals-2222007.jpg", "./image/bye.jpg"];
console.log(randomNum);
console.log(body.style);
body.style = `background-image : url(${arr[randomNum]})`;

greeting.innerHTML = window.localStorage.getItem("username") + "님";

function hiddenFn() {
  if (window.localStorage.getItem("username")) {
    loginForm.classList.add("hidden");
    todo.classList.remove("hidden");
    greeting_div.classList.remove("hidden");
  } else {
    loginForm.classList.remove("hidden");
    todo.classList.add("hidden");
    greeting_div.classList.add("hidden");
  }
}
hiddenFn();

const userNameSubmit = (event) => {
  event.preventDefault();
  window.localStorage.setItem("username", userName.value);
  greeting.innerHTML = window.localStorage.getItem("username") + "님";
  hiddenFn();
};
userButton.addEventListener("click", userNameSubmit);
