fetch("https://alvir.no/flower-power/wp-json/wp/v2/content/")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((content) => {
			console.log(content);
			document.querySelector("body").innerHTML += `
            <h2>${content.title.rendered}</h2>
            ${content.content.rendered}
            <hr>
            `;
		});
	});
