const url = "https://api.disneyapi.dev/character";
const loader = document.querySelector(".circle");

// https://api.disneyapi.dev/characters?page=4
// https://api.disneyapi.dev/characters?name=Mickey%20Mouse
// https://api.disneyapi.dev/character?name=Mickey%20Mouse
// https://api.disneyapi.dev/characters?name=mulan
let page = 4;
let searchValue = "";

async function getCharacters() {
	loader.classList.add("show");
	const response = await fetch(url + "s?page=" + page);
	const result = await response.json();
	console.log(result);
	result.data.forEach((character) => addCharacter(character));
	loader.classList.remove("show");
}
async function getSearch() {
	loader.classList.add("show");
	console.log(url + "?name=" + searchValue);
	const response = await fetch(url + "?name=" + searchValue);
	const result = await response.json();
	console.log(result);
	result.data.forEach((character) => addCharacter(character));
	loader.classList.remove("show");
}

function addCharacter(character) {
	const container = document.querySelector(".container");
	const characterContainer = document.createElement("div");
	const characterName = document.createElement("h3");
	const img = document.createElement("img");
	img.src = character.imageUrl;
	characterName.textContent = character.name;
	characterContainer.append(characterName, img);
	container.append(characterContainer);
}
getCharacters();

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
	searchValue = document.querySelector("#search-input").value;
	console.log(searchValue);
	document.querySelector(".container").innerHTML = "";
	getSearch();
});

prev.addEventListener("click", () => {
	page--;
	document.querySelector(".container").innerHTML = "";
	getCharacters();
});
next.addEventListener("click", () => {
	page++;
	document.querySelector(".container").innerHTML = "";

	getCharacters();
});

const regEx = /\S+@+gmail.com/;

"hei@gmail.com".test(regEx);
