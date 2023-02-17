let url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function getTeams() {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);

	for (let i = 0; i < 15; i++) {
		if (data[i].teamName[0] === "C") {
			continue;
		}
		document.querySelector("body").innerHTML += `
        <h2>${data[i].teamName}</h2>
        `;
	}

	let index = 0;
	for (let team of data) {
		if (index > 14) {
			break;
		}
		index++;
		if (team.teamName.startsWith("C")) {
			continue;
		} else {
			document.querySelector("body").innerHTML += `
        <h2>${team.teamName}</h2>
        `;
		}
	}
}

getTeams();
