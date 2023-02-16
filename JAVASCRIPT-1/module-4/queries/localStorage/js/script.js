async function getJokes() {
	const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=5");
	const data = await response.json();

	data.jokes.forEach((joke) => addJokes(joke));

	console.log(data);
}

getJokes();

function addJokes(joke) {
	if (joke.type === "twopart") {
		const container = document.createElement("a");
		container.href = "./details.html";
		const setup = document.createElement("p");
		const delivery = document.createElement("p");
		setup.textContent = joke.setup;
		delivery.textContent = joke.delivery;
		container.append(setup, delivery);
		document
			.querySelector("body")
			.append(container, document.createElement("hr"));

		/* document.querySelector("body").innerHTML += `
        <a href="details.html?id=${joke.id}">
        <p>${joke.setup}</p>
        <p>${joke.delivery}</p>
        </a>
        `; */
	} else if (joke.type === "single") {
		const container = document.createElement("a");
		container.href = "./details.html";
		const content = document.createElement("p");
		content.textContent = joke.joke;
		container.append(content);
		document
			.querySelector("body")
			.append(container, document.createElement("hr"));

		/* document.querySelector("body").innerHTML += `
        <a href="details.html?id=${joke.id}">
        <p>${joke.joke}</p>
        <p></p>
        </a>
        `; */
	} else {
		document.querySelector("body").innerHTML += "<h1>ERROR</h1>";
	}
}
