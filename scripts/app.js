window.onload = (e) => {
  const button = document.querySelector("#submit");
  const emaileInp = document.querySelector("#email");
  const passwordInp = document.querySelector("#password");
  const formPage = document.querySelector("#form-page");
  // banck page
  const bankHome = document.querySelector("#bankHome");
  const deposit = document.querySelector("#deposit");
  const withdraw = document.querySelector("#withdraw");
  const total = document.querySelector("#total");
  // inputs banck page
  const inpDeposit = document.querySelector("#inpDeposit");
  const withdrawInp = document.querySelector("#withdrawInp");
  // buttons banck page
  const depositBtn = document.querySelector("#depositBtn");
  const withdrawBtn = document.querySelector("#withdrawBtn");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let emaile = emaileInp.value;
    let password = passwordInp.value;
    if (emaile != "" && password != "") {
      const DBemail = "muhammadabdulmannan21@gmail.com";
      const DBpassword = 1234;
      if (emaile === DBemail && password === DBpassword.toString()) {
        formPage.classList.add("hidden");
        bankHome.classList.add("block");
        bankHome.classList.remove("hidden");
      }
    }
  });
  total.innerText = 0;
  deposit.innerText = 0;
  withdraw.innerText = 0;
  depositBtn.addEventListener("click", (e) => {
    deposit.innerText = Number(deposit.innerText) + Number(inpDeposit.value);
    total.innerText = Number(total.innerText) + Number(inpDeposit.value);
  });
  withdrawBtn.addEventListener("click", (e) => {
    if (
      Number(total.innerText) > 0 &&
      Number(total.innerText) - Number(withdrawInp.value) >= 0
    ) {
      total.innerText = Number(total.innerText) - Number(withdrawInp.value);
      withdraw.innerText =
        Number(withdraw.innerText) + Number(withdrawInp.value);
    } else {
    }
  });
};
