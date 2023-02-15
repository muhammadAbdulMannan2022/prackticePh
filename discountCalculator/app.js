const currentPrice = document.querySelector("#price");
const priceWillBe = document.querySelector("#discountPrice");
const newPrice = document.querySelector("#discountPrice");
const promocode = document.querySelector("#promocode");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  if (promocode.value === "DISC30") {
    let discount = 30 * (parseFloat(currentPrice.innerText) / 100);
    currentPrice.parentElement.classList.add("line-through", "text-red-600");
    newPrice.innerText = parseFloat(currentPrice.innerText) - discount;
    newPrice.parentElement.classList.remove("hidden");
  }
});
