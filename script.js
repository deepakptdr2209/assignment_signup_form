// script.js
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");
  const allGood = document.getElementById("allGood");
  const form = document.getElementById("signupForm");
  const submitBtn = document.getElementById("submitBtn");

  function validateEmail(value) {
    if (!value) return false;
    if (value.length <= 3) return false;
    if (!value.includes("@") || !value.includes(".")) return false;
    return true;
  }

  function validatePassword(value) {
    if (!value) return false;
    return value.length > 8;
  }

  function updateValidationUI() {
    const emailVal = emailInput.value.trim();
    const passVal = passInput.value;

    const emailOk = validateEmail(emailVal);
    const passOk = validatePassword(passVal);

    emailError.style.display = emailOk ? "none" : "block";
    passError.style.display = passOk ? "none" : "block";
    allGood.style.display = emailOk && passOk ? "block" : "none";

    return { emailOk, passOk };
  }

  emailInput.addEventListener("input", updateValidationUI);
  passInput.addEventListener("input", updateValidationUI);

  submitBtn.addEventListener("click", () => {
    const { emailOk, passOk } = updateValidationUI();

    if (!emailOk) {
      emailInput.focus();
      return;
    }
    if (!passOk) {
      passInput.focus();
      return;
    }

    const confirmed = window.confirm("Do you want to submit the form?");
    if (confirmed) {
      window.alert("Successful signup!");
      form.reset();
      updateValidationUI();
    } else {
      form.reset();
      updateValidationUI();
      window.location.replace(
        window.location.pathname + window.location.search
      );
    }
  });

  updateValidationUI();
});
