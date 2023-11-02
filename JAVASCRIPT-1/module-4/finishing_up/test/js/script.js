const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");
let date = urlParams.get("date");
let name = urlParams.get("name");

console.log(date, id, name);
