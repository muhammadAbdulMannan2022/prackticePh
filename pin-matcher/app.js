const pinDisplay = document.querySelector("#pinDisplay");
const buttonGenPin = document.querySelector("#buttonGenPin");
const buttons = document.getElementsByClassName("button");
const inputDisplay = document.querySelector("#inputDisplay");
const submitPinBtn = document.querySelector("#submitPin");
const statusRed = document.querySelector("#statusRed");
const statusGreen = document.querySelector("#statusGreen");
const chancesLeft = document.querySelector("#chancesLeft");
// glovals
let pin = null;
buttonGenPin.addEventListener("click", (e) => {
  pin = Math.floor(Math.random() * 100000 + 100000);
  pinDisplay.value = pin;
});

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    let theInputIs = inputDisplay.value.split("");
    if (!isNaN(e.target.innerText)) {
      inputDisplay.value += e.target.innerText;
    } else if (e.target.innerText === "C") {
      inputDisplay.value = "";
    } else if (e.target.innerText === "<") {
      theInputIs.pop();
      inputDisplay.value = theInputIs.join("");
    }
  });
}
submitPinBtn.addEventListener("click", (e) => {
  if (Number(chancesLeft.innerText) > 0) {
    if (pin === Number(inputDisplay.value)) {
      statusGreen.classList.remove("d-none");
      statusRed.classList.add("d-none");
      inputDisplay.value = "";
    } else {
      statusRed.classList.remove("d-none");
      statusGreen.classList.add("d-none");
      chancesLeft.innerText = Number(chancesLeft.innerText) - 1;
    }
  } else {
    alert(`the pin {${inputDisplay.value}} is not currect`);
  }
});
