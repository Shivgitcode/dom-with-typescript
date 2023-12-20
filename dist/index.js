"use strict";
// console.log("Hello world");
// console.log("woo");
var button = document.getElementById("btn2"); //this is not null
var input = document.getElementById("todoinput");
input.value;
button.addEventListener("click", function () {
    alert("Clicked!");
    alert(input.value);
    input.value = "";
});
// type assertion
var mystery = "Hello World!!!";
var numChars = mystery.length;
// type assertion with dom
