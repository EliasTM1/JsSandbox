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

getAPIData().then(displayData).catch(handleError).finally(doSomeCleaning);
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

// * Promises methods:
// ? use Promise.all to wait for all the promises in an iterable to resolve and get an array of their values. This is useful for performing multiple independent async operations in parallel and getting their results together.
// ? use Promise.allSettled to wait for all the promises in an iterable to settle and get an array of their status and value or reason. This is useful for handling multiple async operations that may fail or succeed and getting their final outcomes.
// ? use Promise.prototype.finally to execute a callback after a promise settles, regardless of its outcome. This is useful for performing some cleanup or final actions after an async operation.
// ? use Promise.prototype.then to chain multiple promises and pass the value of one promise to the next one. This is useful for performing sequential async operations that depend on each other.
// ? use Promise.prototype.catch to handle any errors that may occur in a promise chain. This is useful for preventing unhandled promise rejections and providing a fallback or recovery mechanism.

// * Race 

// A function that returns a promise that rejects after a given time
function timeout(t) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject("Time Limit Exceeded");
		}, t);
	});
}

// A function that returns a promise that resolves with a random number after a random time
function random() {
	return new Promise((resolve, reject) => {
		let time = Math.random() * 1000; // A random time between 0 and 1000 ms
		let number = Math.random() * 10; // A random number between 0 and 10
		setTimeout(() => {
			resolve(number);
		}, time);
	});
}

// A function that uses Promise.race to get the random number or the timeout error
function race() {
	return Promise.race([random(), timeout(500)]); // A 500 ms timeout
}

// A function that calls race and logs the result or the error
function test() {
	race()
		.then((value) => console.log("Resolved:", value))
		.catch((reason) => console.log("Rejected:", reason));
}

test(); // Try running this multiple times to see different outcomes

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
