const form = document.querySelector("#webform");

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
  // 2. Vis værdierne i de rigtige output-felter
  const fullName = formData.get("full_name");
  const email = formData.get("email");
  const tel = formData.get("tel");
  const terms = formData.get("terms") ? "Ja" : "Nej";

  fullNameOutput.textContent = fullName;
  emailOutput.textContent = email;
  telOutput.textContent = tel;
  termsOutput.textContent = terms;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
