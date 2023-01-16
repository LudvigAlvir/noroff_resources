var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i].colour);
}

var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (let i = 0; i < dinnerOptions.length; i++) {
	if (dinnerOptions[i].onSpecial) {
		console.log(dinnerOptions[i].name);
	}
}

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (let i = 0; i < people.length; i++) {
	if (people[i].age <= 50 && people[i].age >= 20) {
		console.log(people[i].firstName, people[i].lastName);
	}
}

var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

let listen = document.querySelector("ul");
listen.innerHTML += "<li>hei</li>";
document.querySelector("body").style.background = "red";

/*
for (let i = 0; i < products.length; i++) {
	listen.innerHTML += "<li>" + products[i].name + "</li>";
}
*/
let person = {
	name: "erling haaland",
	age: 22,
	nationality: "norway",
};

console.log(countNation("england"));
console.log(countNation("norway"));
console.log(countNation("brazil"));

function countNation(nationality) {
	count = 0;
	for (let i = 0; i < persons.length; i++) {
		if (persons[i].nationality === nationality) {
			count++;
		}
	}
	return count;
}
