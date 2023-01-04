const body = document.querySelector("body");

body.innerHTML = "<h1 class='title'>Tittel</h1>";
body.innerHTML += "<p>Liten bit med tekst</p>";
body.innerHTML += "<h2>Undertittel</h2>";

let number1 = 10;
let number2 = "10";
let result = number1 + Number(number2);
number2 = parseInt(number2);