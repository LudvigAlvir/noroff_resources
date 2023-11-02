// question 1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
	console.log("smaller");
}
//question 2
var age = 11;
var minimumAge = "13";
minimumAge = parseInt(minimumAge);
if (age >= minimumAge) {
	console.log("old enough");
} else {
	console.log("not old enough");
}

//question 3
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
	console.log("does not pass maximum");
} else {
	console.log("passes maximum");
}

//question 4
var colour = "blue";

if (colour === "orange") {
	console.log("This colour is a bit rubbish");
}

//question 5

var invoicePaid = false;

if (invoicePaid) {
	console.log("paid");
} else {
	console.log("not paid");
}

//question 6

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
	console.log("You lose again");
}

//question 7
var dayOfTheWeek = 2;
switch (dayOfTheWeek) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wedneday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	case 7:
		console.log("Sunday");
		break;
	default:
		console.log("not a day of the week");
		break;
}
