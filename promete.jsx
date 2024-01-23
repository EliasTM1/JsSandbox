//*  Getting some data from the API

function getAPIData() {
	return new Promise(function (resolve, reject) {
		fetch("https://api.weather.gov/gridpoints/OKX/35, 35/forecast")
			.then(function (response) {
				console.log(response, "respuesa ");
				return response.json();
			})
			.then((data) => resolve(data.properties.periods[1].shortForecast));
	});
}

function displayData(data) {
	console.log(data, "THIS IS DATA");
}

function handleError(data) {
	console.log("Handle this error");
}

function doSomeCleaning(data) {
	console.log("Handle this error");
}

getAPIData().then(displayData).catch(handleError).finally(doSomeCleaning)
//*  Getting some data from the API

// * Another example of promises
function primeraPromesa() {
	return new Promise((resolve, reject) => {
		resolve(200);
	});
}

function segundaPromesa() {
	return new Promise((resolve, reject) => {
		reject(404);
	});
}

function onChainingSucces(code) {
	let mensaje = `Chain of promises resultes correct ${code}`;
	console.log(mensaje);
	return mensaje;
}

function chainingFail(code) {
	let mensaje = `Chaining promise rejected ${code}`;
	console.log(mensaje);
	return mensaje;
}

primeraPromesa()
	.then(segundaPromesa)
	.then(onChainingSucces)
	.catch(chainingFail);

// * Another example of promises

// * Possible outcome RESOLVE
function successPromise(data) {
	console.log(data);
	console.log("Desde succes promise");
}
// ! Possible outcome REJECT
function rejectPromise(data) {
	console.log(data);
	console.log("Desde reject promise");
}

// * Promise creation
function getWeather() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve("Sunny");
		}, 1000);
		// reject("Salva a los monos - Promese rechazada")
	});
}

// * Promise cration
function getWeatherIcon(weather) {
	console.log(weather);
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			switch (weather) {
				case "Sunny":
					resolve("🌞");
					break;
				case "Rainy":
					resolve("🌧️");
					break;
				case "Cloudy":
					resolve("🌦️");
					break;
				default:
					reject();
			}
		}, 1000);
	});
}

// * Promise usage
getWeather().then(getWeatherIcon).then(successPromise, rejectPromise);
// * Promise usage
// const nuevaPromesa = getWeather();
// nuevaPromesa.then(successPromise, rejectPromise);

//  * Posibles outcomes
// nuevaPromesa.then(
// 	(datos) => console.log(datos),
// 	(errores) => console.log(errores)
// );

// nuevaPromesa.then(
// 	function successPromise() {
// 		console.log("Desde succes promise");
// 	},
// 	function rejeectPromise() {
// 		console.log("Desde reject promise");
// 	}
// );
