console.log("Loaded instructions...");

document.querySelector("#krop").addEventListener("click", kropF);

function kropF() {
  console.log("kropF er loaded");
  document.querySelector("#gryde").classList.add("my_scale");
}
