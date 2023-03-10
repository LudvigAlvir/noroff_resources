async function getJacket() {
	const res = await fetch("https://alvir.no/wpapi/wp-json/wc/store/products");
	const data = await res.json();
	console.log(data);
	data.forEach((jacket) => {
		if (jacket.category === "shoe") {
			renderShoe();
		}
		if (jacket.category === "jacket") {
			renderJacket(jacket);
		}
	});
}

getJacket();

function renderJacket(jacket) {
	document.querySelector("body").innerHTML += `
    <h2>${jacket.name}</h2>
    <h2>${jacket.description}</h2>
    <h2>${jacket.short_description}</h2>
    <div>
    ${jacket.price_html}
    </div>
    <img src="${jacket.images[0].src}" width="400"/>
    
    <hr>
    `;
}
