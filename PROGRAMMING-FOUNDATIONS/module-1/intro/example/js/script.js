let number = 10;
let string = "10";
let boolean = true;

document.querySelector(".text").innerHTML = "Hei alle sammen";
document.querySelector("#test").innerHTML = "bruke ID";
document.getElementById("test").innerHTML = "Gamle måten";

const addEvent = document.querySelector("#test");
addEvent.addEventListener("click", function () {
	//can call a function here if neededing to pass variables
	addEvent.style.color = "blue";
});

function press() {
	let element = document.querySelector(".text").style;
	if (boolean == true) {
		//element.visibility = "hidden";
		element.color = "red";
		element.fontSize = "4rem";

		boolean = false;
	} else {
		//element.visibility = "visible";
		element.color = "yellow";
		element.fontSize = "2rem";

		boolean = true;
	}
}
