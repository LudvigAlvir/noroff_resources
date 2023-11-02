const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let storedValue = 0;
let displayText = "";

let additionBool = false;
let subtractionBool = false;
let multiplyBool = false;
let divideBool = false;

for (let i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function () {
		display.value += numbers[i].innerHTML;
	};
}

const clearBtn = document.querySelector("#clear");
clearBtn.onclick = clear;
function clear() {
	display.value = "";
	storedValue = 0;
	additionBool = false;
	subtractionBool = false;
	multiplyBool = false;
}

const additionBtn = document.querySelector("#addition");
additionBtn.onclick = additionFunction;
function additionFunction() {
	additionBool = true;
	storedValue = parseInt(display.value);
	console.log(storedValue, additionBool);
	display.value = "";
}

const subtractionBtn = document.querySelector("#subtraction");
subtractionBtn.onclick = subtractionFunction;
function subtractionFunction() {
	subtractionBool = true;
	storedValue = parseInt(display.value);
	console.log(storedValue, subtractionBool);
	display.value = "";
}
const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.onclick = multiplyFunction;
function multiplyFunction() {
	multiplyBool = true;
	storedValue = parseInt(display.value);
	console.log(storedValue, multiplyBool);
	display.value = "";
}

const divideBtn = document.querySelector("#divide");
divideBtn.onclick = divideFunction;
function divideFunction() {
	divideBool = true;
	storedValue = parseInt(display.value);
	console.log(storedValue, divideBool);
	display.value = "";
}

const equalsBtn = document.querySelector("#equals");
equalsBtn.onclick = equalsFunction;
function equalsFunction() {
	if (additionBool) {
		let currentValue = parseInt(display.value);
		display.value = storedValue + currentValue;
		storedValue = 0;
		additionBool = false;
	} else if (subtractionBool) {
		let currentValue = parseInt(display.value);
		display.value = storedValue - currentValue;
		storedValue = 0;
		subtractionBool = false;
	} else if (multiplyBool) {
		let currentValue = parseInt(display.value);
		display.value = storedValue * currentValue;
		storedValue = 0;
		multiplyBool = false;
	} else if (divideBool) {
		let currentValue = parseInt(display.value);
		display.value = storedValue / currentValue;
		storedValue = 0;
		divideBool = false;
	}
}
/*
for (let i = 0; i < operators.length; i++) {
	operators[i].onclick = function () {
		storedValue = parseInt(display.value);
		display.value = "";
		storedOperation = operators[i].innerHTML;
	};
}

function newEquals() {
	switch (storedOperation) {
		case "+":
			currentValue = parseInt(display.value);
			display.value = storedValue + currentValue;
			storedValue = 0;
			storedOperation = "";
			break;

		case "-":
			currentValue = parseInt(display.value);
			display.value = storedValue + currentValue;
			storedValue = 0;
			break;
		default:
			break;
	}
}
*/
