document.addEventListener("keydown", (event) => {
	document.querySelector(".ball").classList.add("move");
	handleKeys(event.key);
});
document.addEventListener("keyup", () => {
	moving = false;
	document.querySelector(".ball").classList.remove("move");
});

const ball = document.querySelector(".second-container");
let ballX = 0;
let ballY = 0;
let moving = false;
function handleKeys(key) {
	if (key === "ArrowUp") {
		ballY -= 20;
	}
	if (key === "ArrowDown") {
		ballY += 20;
	}
	if (key === "ArrowRight") {
		ballX += 20;
	}
	if (key === "ArrowLeft") {
		ballX -= 20;
	}

	ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
}
