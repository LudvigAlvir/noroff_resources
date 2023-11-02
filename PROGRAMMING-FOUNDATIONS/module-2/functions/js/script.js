// Declare a function

firstFunction();

function firstFunction() {
	console.log("first function");
}

// Function with argument

logWord(true);

function logWord(argument) {
	console.log(argument);
}
// Errors
/*
function logWord(argument) {
	console.log(argument);
}*/

// Function with multiple arguments
multipleArguments("hei", "alle", "sammen");

function multipleArguments(word1, word2, word3) {
	console.log(word1, word2, word3);
}

sumThreeNumbers(1, 2, 3);

function sumThreeNumbers(nr1, nr2, nr3) {
	let sum = nr1 + nr2 + nr3;
	console.log(sum);
}

// Function with return statement
function sumTwoNumbers(nr1, nr2) {
	let sum = nr1 + parseInt(nr2);
	return sum;
}

let sum = sumTwoNumbers(5, "6");

console.log(sum);

function convertAndSum(nr1, nr2) {
	let sum2 = parseInt(nr1) + parseInt(nr2);
	return sum2;
}
console.log(convertAndSum("5", "9"));

function check(nr1, nr2) {
	let total = nr1 + nr2;
	if (total % 2 === 0 && total > 10) {
		return true;
		console.log("returning true");
	}
	return false;
}
if (check(5, 6)) {
}
"tekst".toUpperCase();

// variable equals a function
/*
let x = {
	id: 15,
	logword(word) {
		console.log(word);
		console.log(this.id);
	},
};
x.logword("heihei");
*/

function test(nr1, nr2) {
	let number1 = parseInt(nr1);
	let number2 = parseInt(nr2);
	if (number1 && number2) {
		return number1 * number2;
	}
	return "error";
}
console.log(test("5", "44cow"));
