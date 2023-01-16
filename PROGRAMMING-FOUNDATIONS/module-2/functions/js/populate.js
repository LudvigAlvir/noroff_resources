let types = ["hammer", "saw", "knife"];
let prices = [50, 25, 10, 5, 19, 21];
let products = [];

for (let i = 0; i < 20; i++) {
	let product = {
		id: i,
		type: types[parseInt(Math.random() * 3)],
		price: prices[[parseInt(Math.random() * 6)]],
	};
	products.push(product);
}
let div = document.querySelector("div");
products.forEach((e) => {
	div.innerHTML +=
		"<p>ID: " +
		e.id +
		"</p>" +
		"<p>Price: " +
		e.price +
		"</p>" +
		"<p>Category: " +
		e.type +
		"</p>" +
		"<hr>";
});
