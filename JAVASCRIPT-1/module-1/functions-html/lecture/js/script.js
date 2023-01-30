const list = [
	{ id: 1, firstName: "Henrik" },
	{ id: 2, firstName: "Tobias" },
	{ id: 3, firstName: "Markus" },
	{ id: 4, firstName: "Erling" },
];
//måte 1
for (let i = 0; i < list.length; i++) {
	console.log(list[i].id, list[i].firstName);
}
//måte 2
for (let item of list) {
	console.log(item.id, item.firstName);
}
//måte 3
list.forEach((person) => console.log(person.id, person.firstName));

//returnerer firstName og lager nytt array med bare den verdien
const newList = list.map(function (person) {
	return person.firstName;
});

console.log(newList);

//lage html element i javascript
const container = document.createElement("div");
const paragraph = document.createElement("p");
container.classList.add("container");
paragraph.innerText = "Hei";
container.append(paragraph);
console.log(container);
document.querySelector("body").append(container);

//samme som det over bare ved å lage html av en string
document.querySelector("body").innerHTML = `
<div class="container">
 <p>Hei</p>
</div>`;

//lettere eksempel
const heading = document.createElement("h2");
heading.innerText = "Hei";
document.querySelector("body").append(heading);
