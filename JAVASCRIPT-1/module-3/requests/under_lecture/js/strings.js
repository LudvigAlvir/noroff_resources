const arr = ["hei", "nei", "nah", "okay"];

const str = "nah";
let check = false;
for (let i = 0; i < arr.length; i++) {
	if (str === arr[i]) {
		check = true;
	}
}
console.log(check);
