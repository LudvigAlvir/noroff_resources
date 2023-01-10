//length
/*
let tekst = "Hei på dere";
console.log(tekst.length);

for (let i = 0; i < tekst.length; i++) {
	console.log(tekst[i]);
}*/

//toLowerCase
/*let tekst2 = "HeI pÅ dErE";
console.log(tekst2.toLowerCase());
console.log(tekst2);*/

//toUpperCase
/*
console.log(tekst2.toUpperCase());
console.log(tekst2);*/

// String compare er case sensitiv
/*
if ("Ola".toLowerCase() === "ola".toLowerCase()) {
	console.log("equal");
} else {
	console.log("Not equal");
}

console.log("h".charCodeAt(0));
console.log("H".charCodeAt(0));
*/
/*
if ("H" !== "h") {
	console.log("not equal");
} else {
	console.log("are equal");
} 

if ("H" === "h"){
    console.log("are equal");
} else{
    console.log("not equal");
} */
// AND &&

let number = 50;
if (number > 20 && number < 40) {
	console.log("true");
} else {
	console.log("false");
}

// OR ||
if (number > 60 || (number < 60 && number % 2 == 0)) {
	console.log("true");
} else {
	console.log("false");
}

// Nested if

//number = 50;
if (5 < 10) {
	if (5 === "5" || number < 70) {
		console.log("første er sann");
	}
	if (number < 100 || 5 === 6) {
		console.log("andre er sann");
	}
}

// NOT !

let boolean = false;

if (!boolean) {
	console.log("Running");
}

let tekst3;

if (tekst3) {
	console.log("there is text");
} else {
	console.log("there is no text");
}
