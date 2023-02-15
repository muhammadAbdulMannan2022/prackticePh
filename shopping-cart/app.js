const phoneMinus = document.querySelector("#phoneMinus");
const phonePlus = document.querySelector("#phonePlus");
const phoneInp = document.querySelector("#phoneInp");
const caseMinus = document.querySelector("#caseMinus");
const casePlus = document.querySelector("#casePlus");
const caleInp = document.querySelector("#caleInp");
const phoneTotalAmount = document.querySelector("#phoneTotalAmount");
const caseTotalAmount = document.querySelector("#caseTotalAmount");
const subtotal = document.querySelector("#subtotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const checkOut = document.querySelector("#check-out");

addEventForInc(phoneMinus, phoneInp, "-", phoneTotalAmount, 1219);
addEventForInc(phonePlus, phoneInp, "+", phoneTotalAmount, 1219);
addEventForInc(caseMinus, caleInp, "-", caseTotalAmount, 59);
addEventForInc(casePlus, caleInp, "+", caseTotalAmount, 59);

function addEventForInc(element, display, oparator, totalDisplay, price) {
  element.addEventListener("click", (e) => {
    if (oparator === "+") {
      display.value = parseInt(display.value) + 1;
    } else {
      if (Number(display.value) != 1) {
        display.value = Number(display.value - 1);
      } else {
        display.value = 1;
      }
    }
    totalDisplay.innerText = Number(display.value * price);
  });
}

checkOut.addEventListener("click", (e) => {
  subtotal.innerText =
    Number(phoneTotalAmount.innerText) + Number(caseTotalAmount.innerText);
  let taxTotal = 5 * (Number(subtotal.innerText) / 100);
  tax.innerText = taxTotal.toFixed(2);
  let lastTotal = Number(subtotal.innerText) + Number(tax.innerText);
  total.innerText = lastTotal.toFixed(1);
});
