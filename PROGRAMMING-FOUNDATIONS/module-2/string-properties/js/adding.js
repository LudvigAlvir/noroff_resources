var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

let output = document.querySelector("body");

if (invoicePaid && productDispatched && customerHasSigned) {
	output.innerHTML += "<h2>complete</h2>";
} else {
	if (!invoicePaid) {
		output.innerHTML += "<h2>Invoice not paid</h2>";
	}
	if (!productDispatched) {
		output.innerHTML += "<h2>product not dispathed</h2>";
	}
	if (!customerHasSigned) {
		output.innerHTML += "<h2>Customer has not signed</h2>";
	}
}

output.innerHTML += "<h1>Hei dette er fra javascript</h1>";

let x = {
	name: "test",
	age: 4,
};
