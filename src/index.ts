// console.log("Hello world");
// console.log("woo");

interface Todo {
  text: string;
  completed: boolean;
}

const button = document.getElementById("btn2")! as HTMLButtonElement; //this is not null
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("#todoform")!;
const todolist = document.querySelector("#todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJson = localStorage.getItem("todos");
  if (todosJson === null) return [];
  return JSON.parse(todosJson);
}

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submitted");
// });

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("SUBMITTED!");
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
}

function createTodo(todo: Todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.append(todo.text);
  li.append(checkbox);
  todolist.appendChild(li);
}

form.addEventListener("submit", handleSubmit);

// (<HTMLInputElement>input).value;

// button.addEventListener("click", () => {
//   alert("Clicked!");
//   alert(input.value);
//   input.value = "";
// });

// type assertion

// const mystery: unknown = "Hello World!!!";

// const numChars = (mystery as string).length;

// type assertion with dom
