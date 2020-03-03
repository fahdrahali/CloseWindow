document.getElementById("btnClose").addEventListener("click", fermerFenetre);

function fermerFenetre() {
  console.log("close");
  window.open("", "_self", "");
  window.close();
}

const buttonClose = document.getElementById("btnOpen");
buttonClose.addEventListener("click", function ouvrirFenetre() {
  console.log("open");
  window.open("index.html");
});

document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
  document.getElementById("demo").innerHTML = Date();
});
