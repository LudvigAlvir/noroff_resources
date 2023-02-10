const url = "https://api.kanye.rest";

async function getQuote() {
	try {
		const response = await fetch(url);
		const result = await response.json();
		console.log(result);
		addQuote(result.quote);
	} catch (error) {}
}

function addQuote(quote) {
	const container = document.querySelector(".quote");
	const element = document.createElement("blockquote");
	element.textContent = quote;
	container.append(element);
}

getQuote();
