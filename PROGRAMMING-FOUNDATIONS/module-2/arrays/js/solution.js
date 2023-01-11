var winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2]);

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("onion");
console.log(vegetables);

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (let i = 0; i < randomThings.length; i++) {
	console.log(randomThings[i]);
}

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (let i = 0; i < moreThings.length; i++) {
	if (typeof moreThings[i] === "number") {
		console.log(moreThings[i]);
	}
}

var ingredients = ["water", "flour", "toothpaste", "fish lips"];
// Hvordan man sorterer tekst
let sorted = ingredients.sort();
console.log(ingredients);

var characters = [
	"Gob",
	"Michael",
	"George Michael",
	"Lindsay",
	"Buster",
	"Maeby",
	"Tobias",
	"Lucille",
];

for (let i = 0; i < characters.length; i += 2) {
	console.log(characters[i]);
}
