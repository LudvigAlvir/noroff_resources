//compare strings

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
	console.log("true");
} else {
	console.log("false");
}

//below 10 over 4

var username = "myusername";

if (username.length >= 4 && username.length <= 10) {
	console.log("good name");
} else {
	if (username.length < 4) {
		console.log("Too short");
	}
	if (username.length > 10) {
		console.log("too long");
	}
}

//check if order is complete

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid && productDispatched && customerHasSigned) {
	console.log("complete");
} else {
	if (!invoicePaid) {
		console.log("Invoice not paid");
	}
	if (!productDispatched) {
		console.log("product not dispathed");
	}
	if (!customerHasSigned) {
		console.log("Customer has not signed");
	}
}
//rewrite
if (!invoicePaid || !productDispatched || !customerHasSigned) {
	if (!invoicePaid) {
		console.log("Invoice not paid");
	}
	if (!productDispatched) {
		console.log("product not dispathed");
	}
	if (!customerHasSigned) {
		console.log("Customer has not signed");
	}
} else {
	console.log("order complete");
}
