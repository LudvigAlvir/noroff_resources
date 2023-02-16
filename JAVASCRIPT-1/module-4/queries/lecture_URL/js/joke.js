const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

async function getJoke() {
	const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
	const data = await response.json();
	console.log(data);
	addJoke(data);
}
getJoke();

function addJoke(joke) {
	if (joke.type === "single") {
		document.querySelector("body").innerHTML = `
        <p class="joke">${joke.joke}</p>
        `;
		jokeP = document.querySelector(".joke");
	} else if (joke.type === "twopart") {
		document.querySelector("body").innerHTML = `
        <p class="joke">${joke.setup}</p>
        <p>${joke.delivery}</p>
        `;
		jokeP = document.querySelector(".joke");
	} else {
		document.querySelector("body").innerHTML = "<h1>ERROR</h1>";
	}
}
let jokeP;
