const container = document.querySelector(".container");

container.addEventListener("click", print);

function print() {
	console.log("hello");
}
/* const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", function () {
	paragraph.style.color = "green";
});
paragraph.addEventListener("mouseout", () => {
	paragraph.style.color = "black";
}); */
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
	paragraph.addEventListener("mouseover", function () {
		paragraph.style.color = "green";
	});
	paragraph.addEventListener("mouseout", () => {
		paragraph.style.color = "black";
	});
});
//samme som
/* for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].addEventListener("mouseover", function () {
		paragraphs[i].style.color = "green";
	});
	paragraphs[i].addEventListener("mouseout", () => {
		paragraphs[i].style.color = "black";
	});
} */
const btn = document.querySelector("button");

/* btn.addEventListener("click", () => {
	document.querySelector(".circle").classList.add("show");
	let catFact;
	setTimeout(() => {
		document.querySelector(".circle").classList.remove("show");
		console.log("3s har gått");
		const content = document.querySelector(".content");
		const element = document.createElement("div");
		const heading = document.createElement("h2");
		const info = document.createElement("p");
		heading.textContent = "Cat fact:";
		info.textContent = catFact.fact;
		element.append(heading, info);
		content.append(element);
	}, 3000);
	fetch("https://catfact.ninja/fact")
		.then((response) => response.json())
		.then((data) => (catFact = data));
}); */

btn.addEventListener("click", () => {
	document.querySelector(".circle").classList.add("show");
	let catFact;
	setTimeout(() => {}, 3000);
	fetch("https://catfact.ninja/fact")
		.then((response) => response.json())
		.then((data) => (catFact = data))
		.then(() => {
			document.querySelector(".circle").classList.remove("show");
			console.log("3s har gått");
			const content = document.querySelector(".content");
			const element = document.createElement("div");

			const heading = document.createElement("h2");
			const info = document.createElement("p");
			heading.textContent = "Cat fact:";
			info.textContent = catFact.fact;
			element.append(heading, info);
			content.append(element);
		});
});

const numbers = [1, 2, 3, 4, 5];
count = 0;
//noe forran
setInterval(() => {
	console.log(numbers[count]);
	count++;
	if ("noe her") {
		//mer her
	}
}, 1500);
//noe her
