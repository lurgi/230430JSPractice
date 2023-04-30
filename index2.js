const todo_list = document.querySelector("#todo_list");
const todo_form = document.querySelector("#todo_form");
const todo_value = document.querySelector("#todo_form > input:first-child");
const todo_submit_button = document.querySelector(
  "#todo_form > input:nth-child(2)"
);
const todo_delete = document.querySelector("#todo_list li button");

let todos = JSON.parse(window.localStorage.getItem("todos")) || [];

const tempTodos = [...todos];

const deleteFn = (event) => {
  event.preventDefault();
  const liElement = event.target.parentNode;
  event.target.parentNode.parentNode.removeChild(liElement);
  todos = todos.filter((todo) => todo.id !== liElement.id);
  const newtodos = JSON.stringify(todos);

  window.localStorage.setItem("todos", newtodos);
};

while (tempTodos.length !== 0) {
  const tempTodo = tempTodos.shift();
  const todo_li = document.createElement("li");
  todo_li.id = tempTodo.id;
  const todo_span = document.createElement("span");
  todo_span.textContent = tempTodo.value;
  todo_li.appendChild(todo_span);
  const todo_button = document.createElement("button");
  todo_button.textContent = "❌";
  todo_li.appendChild(todo_button);
  todo_list.appendChild(todo_li);
  todo_button.addEventListener("click", deleteFn);
}

const todoClick = (event) => {
  event.preventDefault();
  const todo_li = document.createElement("li");
  todo_li.id = Date.now();
  const todo_span = document.createElement("span");
  todo_span.textContent = todo_value.value;
  todo_li.appendChild(todo_span);
  const todo_button = document.createElement("button");
  todo_button.textContent = "❌";
  todo_li.appendChild(todo_button);
  todos.push({ id: todo_li.id, value: todo_value.value });

  const newtodos = JSON.stringify(todos);
  window.localStorage.setItem("todos", newtodos);

  todo_button.addEventListener("click", deleteFn);
  todo_value.value = "";
  todo_list.appendChild(todo_li);
};

todo_submit_button.addEventListener("click", todoClick);
