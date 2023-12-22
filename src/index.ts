// console.log("Hello world");
// console.log("woo");

const button = document.getElementById("btn2")! as HTMLButtonElement; //this is not null
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("#todoform")!;
const todolist = document.querySelector("#todolist")!;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submitted");
// });

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("SUBMITTED!");
  const li = document.createElement("li")! as HTMLLIElement;
  const listitem: string = input.value;
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
