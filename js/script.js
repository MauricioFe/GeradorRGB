window.addEventListener("load", start);

var rengeRed = null;
var rengeGreen = null;
var rengeBlue = null;

var inputRed = null;
var inputGreen = null;
var inputBlue = null;
var divResultado = null;

var red = 0;
var blue = 0;
var green = 0;
function start() {
  inicalizaComponentes();
  RetValueRengeRed();
  RetValueRengeGreen();
  RetValueRengeBlue();
  mudarCor(red, green, blue);
}

function inicalizaComponentes() {
  rengeRed = document.querySelector("#red");
  rengeGreen = document.querySelector("#green");
  rengeBlue = document.querySelector("#blue");
  inputRed = document.querySelector("#inputRed");
  inputGreen = document.querySelector("#inputGreen");
  inputBlue = document.querySelector("#inputBlue");
  divResultado = document.querySelector(".resultado");

  rengeRed.value = 0;
  rengeGreen.value = 0;
  rengeBlue.value = 0;
  inputRed.value = 0;
  inputGreen.value = 0;
  inputBlue.value = 0;
}
function RetValueRengeRed() {
  rengeRed.addEventListener("input", () => {
    inputRed.value = rengeRed.value;
    red = inputRed.value;
    mudarCor(red, green, blue);
  });
}
function RetValueRengeGreen() {
  rengeGreen.addEventListener("input", () => {
    inputGreen.value = rengeGreen.value;
    green = inputGreen.value;
    mudarCor(red, green, blue);
  });
}
function RetValueRengeBlue() {
  rengeBlue.addEventListener("input", () => {
    inputBlue.value = rengeBlue.value;
    blue = inputBlue.value;
    mudarCor(red, green, blue);
  });
}

function mudarCor(r, g, b) {
  divResultado.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
