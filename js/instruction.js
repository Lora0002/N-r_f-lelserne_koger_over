console.log("Loaded instructions...");

document.querySelector("#Krop").addEventListener("click", KropF);

function KropF() {
  console.log("KropF er loaded");
  document.querySelector("#Gryde").classList.add("my_scale");
  // document.querySelector("#Gryde").style.fill = "green";
  //document.querySelector("#Gryde").style.transition = "fill 2s";
  document.querySelector(".info-text h2").textContent =
    "Når gryden flyder over";

  document.querySelector(".info-text p").textContent =
    "Når følelsesstormen blæser, og tankerne snurrer, så brug kroppen som dit anker.Sæt fødderne i gulvet og mærk, hvordan du står fast. Træk vejret dybt  ind gennem næsen, ud gennem munden. Denne strategi hjælper dig med at finde ro midt i kaosset. Kan gentages flere gange – især når stormen vender tilbage.";
}

document.querySelector("#Udtryk").addEventListener("click", UdtrykF);
function UdtrykF() {
  console.log("UdtrykF er loaded");
  document.querySelector("#vanddpyt").classList.add("my_scale");
  // document.querySelector("#vanddpyt").style.fill = "green";
  //document.querySelector("#vanddpyt").style.transition = "fill 2s";
  document.querySelector(".info-text h2").textContent = "UDTRYK!!!";

  document.querySelector(".info-text p").textContent =
    " Kreativt Fristed – Lad stormen få farve Når ordene drukner, så lad farverne tale. Tegn, skriv eller klip dine følelser ud. Du behøver ikke forstå det – bare få det ud af kroppen. Brug papir, en serviet eller din notesbog. Alt tæller, så længe du får stormen ud af hovedet og ned i hænderne.";
}

document.querySelector("#Forbindelse").addEventListener("click", ForbindelseF);
function ForbindelseF() {
  console.log("ForbindelseF er loaded");
  document.querySelector("#hår").classList.add("my_scale");
  // document.querySelector("#hår").style.fill = "green";
  //document.querySelector("#hår").style.transition = "fill 2s";
  document.querySelector(".info-text h2").textContent = "FORBINDELSE!!!";

  document.querySelector(".info-text p").textContent =
    " Hjertelinje – Tal stormen ud Når vinden bliver for stærk, så læn dig mod et andet menneske. Ring eller skriv til en, du stoler på. Sig bare:Jeg har det svært lige nu. At blive hørt kan dæmpe stormen med det samme. Ingen løsninger – bare ord og nærvær.";
}
