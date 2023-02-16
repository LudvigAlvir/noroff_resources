async function getJokes() {
	const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=5");
	const data = await response.json();

	data.jokes.forEach((joke) => addJokes(joke));

	console.log(data);
}

getJokes();

function addJokes(joke) {
	if (joke.type === "twopart") {
		document.querySelector("body").innerHTML += `
        <a href="details.html?id=${joke.id}">
        <p>${joke.setup}</p>
        <p>${joke.delivery}</p>
        </a>
        `;
	} else if (joke.type === "single") {
		document.querySelector("body").innerHTML += `
        <a href="details.html?id=${joke.id}">
        <p>${joke.joke}</p>
        <p></p>
        </a>
        `;
	} else {
		document.querySelector("body").innerHTML += "<h1>ERROR</h1>";
	}
}
