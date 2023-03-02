fetch("http://localhost/flower-power/wp-json/wp/v2/Book")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((book) => {
			console.log(book);
			document.querySelector("body").innerHTML += `
            <h2>${book.title.rendered}</h2>
            ${book.content.rendered}
            <hr>
            `;
		});
	});
