function fizzBuzz(nr) {
	let startTime = Date.now();
	for (let i = 0; i < nr; i++) {
		if (i % 15 === 0) {
			console.log("fizzBuzz");
		} else if (i % 3 === 0) {
			console.log("fizz");
		} else if (i % 5 === 0) {
			console.log("buzz");
		} else {
			console.log(i);
		}
	}
	console.log(Date.now() - startTime);
}
function fizzBuzz(nr) {
	let startTime = Date.now();
	for (let i = 0; i < nr; i++) {
		if (i % 15 === 0) {
			console.log("fizzBuzz");
		} else if (i % 3 === 0) {
			console.log("fizz");
		} else if (i % 5 === 0) {
			console.log("buzz");
		} else {
			console.log(i);
		}
	}
	console.log(Date.now() - startTime);
}

fizzBuzz(100);

const arr = [-1, -5, -10, -54, -21, -7, -9];

function largest() {
	let largestNumber = arr[0];
	for (let i = 0; i < arr.length; i++) {
		console.log(largestNumber);
		if (arr[i] > largestNumber) {
			largestNumber = arr[i];
		}
	}
	return largestNumber;
}
console.log(largest());

function reverse(word) {
	let strBuilder = "";
	for (let i = word.length - 1; i >= 0; i--) {
		strBuilder += word[i];
	}
	return strBuilder;
}
function reverseOther(word) {
	let strBuilder = "";
	for (let i = 0; i < word.length; i++) {
		strBuilder += word[word.length - 1 - i];
	}
	return strBuilder;
}
let str = "dette er en string";
console.log(reverse(str));

function palindrome(word) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[word.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
