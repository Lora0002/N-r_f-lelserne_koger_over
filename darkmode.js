//const toggleBtn = document.querySelector(".theme-toggle");
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
});
// når man klikker på switch knap bliver det til darkmode
