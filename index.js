let inputElement = document.querySelector("#input");
let weightElement = document.querySelector("#weight");

function convertNow(event) {
  event.preventDefault();
  let newWeight = inputElement.value * 2.205;
  weightElement.textContent = " " + Math.floor(newWeight) + "kg";
  inputElement.value = "";
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", convertNow);
