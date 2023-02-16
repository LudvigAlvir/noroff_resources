// Get id from url
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

async function getJoke() {
	const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
	const data = await response.json();
	console.log(data);
	addJoke(data);
}

getJoke();


function addJoke(joke) {
	if (joke.type === "twopart") {
		document.querySelector("body").innerHTML += `
        <p>${joke.setup}</p>
        <p>${joke.delivery}</p>
     
        `;
	} else if (joke.type === "single") {
		document.querySelector("body").innerHTML += `
        
        <p>${joke.joke}</p>
        <p></p>
      
        `;
	} else {
		document.querySelector("body").innerHTML += "<h1>ERROR</h1>";
	}
}
