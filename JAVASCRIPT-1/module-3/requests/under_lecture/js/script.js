const url = "https://v2.jokeapi.dev/joke/";
let type = "Any";
let flags = "religious,political";
let jokeType = "";
let amount = 5;

document.querySelector("button").addEventListener("click", validate);

function validate() {
	getJokes();
}

async function getJokes() {
	fetch(
		`https://v2.jokeapi.dev/joke/${type}
		?blacklistFlags=${flags}
		&type=${jokeType}
		&amount=${amount}`
	).then((response) =>
		response.json().then((data) => {
			if (amount > 1) {
				//if there are more than one joke
				data.jokes.forEach((joke) => {
					appendJoke(joke);
				});
			} else {
				// if there is one joke
				appendJoke(data);
			}
		})
	);
}

//function that adds the joke to the DOM
function appendJoke(joke) {
	if (joke.setup) {
		//checks if it's a twopart or single joke
		document.querySelector(".jokes").innerHTML += `
			<details><summary>
			${joke.setup}
			</summary>
			${joke.delivery}
			</details>
			`;
	} else {
		let paragraph = document.createElement("p");
		paragraph.textContent = joke.joke;
		document.querySelector(".jokes").append(paragraph);
	}
}

/* let paragraph = document.createElement("p");
		paragraph.textContent = data.joke;
		document.querySelector(".jokes").append(paragraph);

		//samme resultat
		/* document.querySelector('.jokes').innerHTML += `
		<p>${data.joke}</p>
		`; */

/* 		console.log(data.setup, data.delivery);
		document.querySelector(".jokes").innerHTML = `
		<details>
		<summary>${data.setup}</summary>
				${data.delivery}
		</details>
		`; */
