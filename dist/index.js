"use strict";
// console.log("Hello world");
// console.log("woo");
var button = document.getElementById("btn2"); //this is not null
var input = document.getElementById("todoinput");
var form = document.querySelector("#todoform");
var todolist = document.querySelector("#todolist");
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJson = localStorage.getItem("todos");
    if (todosJson === null)
        return [];
    return JSON.parse(todosJson);
}
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submitted");
// });
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!");
    var newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
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
