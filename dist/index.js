"use strict";
// console.log("Hello world");
// console.log("woo");
var button = document.getElementById("btn2"); //this is not null
var input = document.getElementById("todoinput");
var form = document.querySelector("#todoform");
var todolist = document.querySelector("#todolist");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submitted");
// });
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!");
    var li = document.createElement("li");
    var listitem = input.value;
    li.innerHTML = listitem;
    todolist.appendChild(li);
    input.value = "";
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
