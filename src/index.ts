// console.log("Hello world");
// console.log("woo");

const button = document.getElementById("btn2")! as HTMLButtonElement; //this is not null
const input = document.getElementById("todoinput")! as HTMLInputElement;

(<HTMLInputElement>input).value;

button.addEventListener("click", () => {
  alert("Clicked!");
  alert(input.value);
  input.value = "";
});

// type assertion

const mystery: unknown = "Hello World!!!";

const numChars = (mystery as string).length;

// type assertion with dom
