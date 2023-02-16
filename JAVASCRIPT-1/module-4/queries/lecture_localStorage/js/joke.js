let id = localStorage.getItem("id");

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
        <p>${joke.joke}</p>
        `;
	} else if (joke.type === "twopart") {
		document.querySelector("body").innerHTML = `
        <p>${joke.setup}</p>
        <p>${joke.delivery}</p>
        `;
	} else {
		document.querySelector("body").innerHTML = "<h1>ERROR</h1>";
	}
}
