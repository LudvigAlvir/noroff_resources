const url = "https://v2.jokeapi.dev/joke/Any?amount=5";

async function getJokes() {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	data.jokes.forEach((joke) => addJokes(joke));
}
getJokes();

function addJokes(joke) {
	if (joke.type === "single") {
		const container = document.createElement("div");
		const jokeLink = document.createElement("a");
		const paragraph = document.createElement("p");
		paragraph.textContent = joke.joke;
		jokeLink.href = `joke.html?id=${joke.id}`;
		jokeLink.append(paragraph);
		container.append(jokeLink);
		document.querySelector("body").append(container);
	} else if (joke.type === "twopart") {
		const container = document.createElement("div");
		const jokeLink = document.createElement("a");
		const setup = document.createElement("p");
		const delivery = document.createElement("p");
		jokeLink.href = `joke.html?id=${joke.id}`;
		setup.textContent = joke.setup;
		delivery.textContent = joke.delivery;
		jokeLink.append(setup, delivery);
		container.append(jokeLink);
		document.querySelector("body").append(container);
	} else {
		document.querySelector("body").innerHTML = "<h1>ERROR</h1>";
	}
}
