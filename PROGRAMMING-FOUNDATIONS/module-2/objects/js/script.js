/*let person1 = {
	firstName: "Henrik",
	lastName: "Olsen",
	birtYear: 1975,
	children: null,
};
let person2 = {
	firstName: "Mathea",
	lastName: "Olsen",
	birtYear: 1942,
	children: person1,
};
let person3 = {
	lastName: "Olsen",
	birtYear: 1942,
	children: person1,
};

let people = [person1, person2, person3];
for (let i = 0; i < people.length; i++) {
	if (people[i].firstName) {
		console.log(people[i].firstName);
	} else {
		console.log("no name found");
	}
}*/
let numbers = [];
for (let i = 0; i < 10; i++) {
	numbers.push(parseInt(Math.random() * 100));
}
console.log(numbers);

let sortedArray = [];
for (let i = 0; i < numbers.length; i++) {
	let checkNumber = numbers[i];
	console.log("first for");
	for (let l = 1; l < numbers.length; l++) {
		console.log(numbers);
		if (numbers[l] < checkNumber) {
			let stored = checkNumber;
			checkNumber = numbers[l];
			numbers[l] = stored;
		} else {
			console.log(i + " " + l);
		}
	}
	sortedArray.push(checkNumber);
}

console.log(sortedArray);

for (let i = 0; i < 10; i++) {
	document.querySelector("ul").innerHTML += "<li>" + i + "</li>";
}

let x = 50.0;

console.log(x.toFixed(2));
let array = ["hei ", "hei"]
let ul = document.querySelector("ul");

ul.innerHTML += "<li>Hei</li>";
ul.innerHTML += "<li>på</li>";

for (let i=0; i<array.length; i++){
	ul.innerHTML+= "<li>"+ array[i]+"</li>"
}