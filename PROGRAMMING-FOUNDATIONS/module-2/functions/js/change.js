//Using EventListener
/*
document.querySelector(".red").addEventListener("click", () => {
	changeColor("red");
});
document.querySelector(".orange").addEventListener("click", () => {
	changeColor("orange");
});
document.querySelector(".pink").addEventListener("click", () => {
	changeColor("pink");
});

// Using onClick in JavaScript
document.querySelector(".pink").onclick = function () {
	changeColor("pink");
};
document.querySelector(".red").onclick = function () {
	changeColor("red");
};
document.querySelector(".orange").onclick = function () {
	changeColor("orange");
};
//changeColor function
function changeColor(arg) {
	document.querySelector("body").style.background = arg;
}

//Onclick
document.querySelector(".heading").onclick = addUpdate;
//eventlistener
document.querySelector(".heading").addEventListener("click", () => addUpdate());
//add update text function
function addUpdate() {
	document.querySelector("h1").innerHTML += "Updated:";
}
*/
let btnOrange = document.querySelector(".orange");
let btnRed = document.querySelector(".red");
let btnPink = document.querySelector(".pink");

let buttons = [btnOrange, btnPink, btnRed];

buttons[0].onclick = () => changeColor("orange");
buttons[1].onclick = () => changeColor("red");
buttons[2].onclick = () => changeColor("pink");
function changeColor(colour) {
	document.querySelector("body").style.background = colour;
}

let obj = {
	name: "ola",
	changeName: function (arg) {
		if (arg.length > 5 && arg.length < 10) {
			this.name = arg;
		}
	},
};

obj.name = "876876";
obj.changeName("Henrik");
console.log(obj.name);
