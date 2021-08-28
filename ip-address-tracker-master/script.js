"use strict";

const input = document.querySelector(".input-ip");
const btn = document.querySelector(".button");
const stats = document.querySelector(".stats");
let map = document.getElementById("map");
let loadedMap, popup;
// Configure marker
const fmIcon = L.icon({
	iconUrl: "./images/icon-location.svg",
	iconSize: [40, 50],
	iconAnchor: [20, 49],
});

//
btn.addEventListener("click", function (e) {
	if (!input.value) return;
	getInputInfo(input.value)
		.then((data) => (addStats(data), renderMap(data)))
		.catch((err) => console.log(err, err.message));
});

input.addEventListener("keydown", function (e) {
	if (!input.value) return;
	if (e.key === "Enter")
		getInputInfo(input.value)
			.then((data) => (addStats(data), renderMap(data)))
			.catch((err) => console.log(err, err.message));
});

const renderMap = function (data) {
	loadedMap.setView([`${data.location.lat + 0.002}`, `${data.location.lng}`], 15);

	// Set marker to map
	L.marker([`${data.location.lat}`, `${data.location.lng}`], { icon: fmIcon }).addTo(loadedMap);
};

// Render/style map and set view
const loadMap = function (data) {
	// Render map, set view little lower for better UX
	loadedMap = L.map("map").setView([`${data.location.lat + 0.002}`, `${data.location.lng}`], 15);

	// Render map with selected tiles
	L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(loadedMap);

	// Set marker to map
	L.marker([`${data.location.lat}`, `${data.location.lng}`], { icon: fmIcon }).addTo(loadedMap);

	// Add popup to setView position
	// popup = L.popup()
	// 	.setLatLng([`${data.location.lat}`, `${data.location.lng}`])
	// 	.setContent("Here")
	// 	.openOn(loadedMap);
};

const addStats = function (data) {
	const html = `<li><h5>IP Address</h5><h4>${data.ip}</h4></li>
<li><h5>Location</h5><h4>${data.location.city}, ${data.location.postalCode}</h4></li>
<li><h5>Timezone</h5><h4>${data.location.timezone}</h4></li>
<li><h5>ISP</h5><h4>${data.isp}</h4></li>`;
	stats.innerHTML = html;
};

const getInputInfo = async function (input) {
	try {
		if (!input) return;
		let response;
		// Check if input starts by number or string, then search by ipAdress or domain type
		if (isFinite(String(input).split("").splice(0, 3)))
			response = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=at_AMsAirqTTbNpwOwTrjIqpOpbZ6a1W&ipAddress=${input}`
			);
		else
			response = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=at_AMsAirqTTbNpwOwTrjIqpOpbZ6a1W&domain=${input}`
			);

		return await response.json();
	} catch (err) {
		console.error(err, err.message);
	}
};

const init = async function () {
	try {
		const data = await getInputInfo("google.com");
		return addStats(data), loadMap(data);
	} catch (err) {
		console.log(err, err.message);
	}
};

init();
