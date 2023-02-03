document.addEventListener("click", (e) => {
	console.log(e);
	handleClick(e);
});
const ball2 = document.querySelector(".third-container");

const ball = document.querySelector(".second-container");
let ballX = 0;
let ballY = 0;
let moving = false;
function handleClick(event) {
	ball2.style.transform = `translate(${ballX - 25}px, ${ballY - 25}px)`;
	ballX = event.x;
	ballY = event.y;
	document.querySelector(".ball").classList.add("move");
	document.querySelector(".second-ball").classList.add("move");
	setTimeout(() => {
		document.querySelector(".ball").classList.remove("move");
		document.querySelector(".second-ball").classList.remove("move");
	}, 2000);

	ball.style.transform = `translate(${ballX - 200}px, ${ballY - 200}px)`;
}
