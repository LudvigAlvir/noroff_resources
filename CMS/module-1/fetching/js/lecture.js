/* fetch("https://alvir.no/wpapi/wp-json/wp/v2/book")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);

        
	}); */

async function getBooks() {
	const res = await fetch("https://alvir.no/wpapi/wp-json/wp/v2/book");
	const data = await res.json();
	console.log(data);

	data.forEach((book) => {
		document.querySelector("body").innerHTML += `
        <h2>${book.title.rendered}</h2>
        ${book.content.rendered}
        <hr>
        `;
	});
}
getBooks();
