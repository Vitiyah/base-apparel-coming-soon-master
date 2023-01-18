const btn = document.querySelector(".btn");
const errorlogo = document.getElementById("error-logo");
const errorMsg = document.getElementById("error-message");
const emailInp = document.querySelector(".email-input");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function errorCheck() {
  btn.addEventListener("click", () => {
    const inputValue = emailInp.value;
    if (inputValue === "") {
      errorMsg.style.display = "block";
      errorlogo.style.display = "block";
      emailInp.style.border = "2px solid hsl(0, 69%, 49%)";
    } else if (!validate(inputValue)) {
      errorMsg.style.display = "block";
      errorlogo.style.display = "block";
      emailInp.style.border = "2px solid hsl(0, 69%, 49%)";
    } else {
      errorMsg.style.display = "none";
      errorlogo.style.display = "none";
      emailInp.style.border = "1px solid hsla(0, 36%, 70%, 0.6)";
    }
  });
}

function validate(email) {
  return emailRegex.test(email);
}

errorCheck();
