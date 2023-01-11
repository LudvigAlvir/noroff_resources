var winningNumbers = [1, 76, 2, 78, 16, 7];

winningNumbers.forEach(testFunction);

function testFunction(item, index, a) {
	console.log(item + " " + index + " " + a);
}

for (let i = 0; i < winningNumbers.length; i++) {
	testFunction(winningNumbers[i], i, winningNumbers);
}
