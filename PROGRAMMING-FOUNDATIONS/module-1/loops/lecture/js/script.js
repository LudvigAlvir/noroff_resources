//Prime checker

for (let number = 2; number < 1000; number++) {
	let notPrime = false;
	for (let checkNumber = 2; checkNumber < number / 2; checkNumber++) {
		if (number % checkNumber == 0) {
			notPrime = true;
			break;
		}
	}
	if (!notPrime) {
		console.log(number);
	}
}

//Fibonacci sequence

let nr1 = 1;
let nr2 = 1;

for (let i = 0; i < 20; i++) {
	let x = nr1 + nr2;
	nr1 = nr2;
	nr2 = x;
	console.log(x);
}
