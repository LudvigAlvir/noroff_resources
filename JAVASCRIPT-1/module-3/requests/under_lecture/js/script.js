const url = "https://v2.jokeapi.dev/joke/";
let category = "Any";
let flags = "religious,political";
let type = ""; // "single" eller "twopart"
let amount = 5;
const flagsList = [
	"nsfw",
	"religious",
	"political",
	"racist",
	"sexist",
	"explicit",
];

document.querySelector("#submit").addEventListener("click", validate);
const amountInput = document.querySelector("#amount");

function validate() {
	amount = amountInput.value;
	type = document.querySelector("#type").value;
	flags = document.querySelector("#flags").value;

	if (!(type === "single" || type === "twopart" || type === "")) {
		document.querySelector(".jokes").innerHTML = `
		<h2 style="color: red">Error, type must be "", "single" or "twopart"</h2>
		`;
	} else if (flagCheck(flags)) {
		document.querySelector(".jokes").innerHTML = `
		<h2 style="color: red">Flags are wrong</h2>
		`;
	} else {
		getJokes();
	}
}
function flagCheck(flags) {
	let bool;
	const newArray = flags.split(",");
	console.log(newArray);
	for (let word of newArray) {
		bool = true;
		for (let i = 0; i < flagsList.length; i++) {
			if (word === flagsList[i]) {
				bool = false;
			}
		}
	}
	return bool;

	/* const newArray = ["religious","political"];
	let strBuilder ="political";
	for (let i = 0; i<test.length; i++){
		if (test[i] ===","){
			newArray.push(strBuilder);
			strBuilder = "";
			continue
		}
		strBuilder += test[i];
	}
	newArray.push(strBuilder) */
}

async function getJokes() {
	document.querySelector(".jokes").innerHTML = "";
	fetch(
		`${url}${category}
		?blacklistFlags=${flags}
		&type=${type}
		&amount=${amount}`
	)
		.then((response) => response.json())
		.then((data) => {
			if (amount > 1) {
				//if there are more than one joke
				data.jokes.forEach((joke) => {
					appendJoke(joke);
				});
			} else {
				// if there is one joke
				appendJoke(data);
			}
		});
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
