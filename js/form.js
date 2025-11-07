const form = document.querySelector("form");

const fullNameOutput = document.querySelector("#full_name_output");

const emailOutput = document.querySelector("#email_output");
const telOutput = document.querySelector("#tel_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  const formData = new FormData(form);
  const firstName = formData.get("full_name");
  // 2. Vis værdierne i de rigtige output-felter
  firstOutput.textContent = fullName;
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
