// * Writting more semantic HTML and CSS
let header = document.createElement("h1");
header.innerText = "WRITE MORE HTML & CSS";
document.body.appendChild(header);

let myInput = document.createElement("input");
myInput.placeholder = "SUBMIT YOUR INFO";

let button = document.createElement("button");
button.textContent = "Click me";
button.addEventListener("click", performSubmit);

let form = document.createElement("form");
form.appendChild(myInput);
form.appendChild(button);
document.body.appendChild(form);

form.onsubmit = performSubmit;

let sample = document.createElement("samp");
sample.textContent = "lorem20 Hola como estas";
document.body.appendChild(sample);

let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let currenColor = "";


function performSubmit(e) {
    e.preventDefault();
    currenColor = ""
	for (let i = 0; i < 6; i++) {
		currenColor = hexValues[getRandomNumber(0, 13) - 1];
	}

	document.body.style.backgroundColor = "#e4f2a0";

	myInput.value = "";
}

function getRandomNumber(min, max) {
	const randomFloat = Math.random();
	const randomNumber = Math.floor(randomFloat * (max - min + 1)) + min;
    console.log(randomNumber)

	return randomNumber;
}
// * Global this === Window in the browser
// console.log(this)

class Person {
	constructor(name, age, sex) {
		this.name = name
		this.age = age
		this.sex = sex
	}
	talk = function() {
		console.log(this)
		// return this
	}
}

// * Here THIS refers to the object that owns it

let eliasToscano = new Person("Elias", 29, "Male")
console.log(eliasToscano.talk())

let jesus = new Person("Jesus", 2024, "Male")
console.log(jesus.talk())


function saySomething () {
	console.log(this)
	return this
}

let myObject = {
	valueOfThis: saySomething
}
console.log(myObject.valueOfThis())


// * in this 2 examples the value of this refers to the element that triggered the event

let buttonNuevo =  document.createElement('button')
buttonNuevo.value = "MONONUCLEOSIS"
document.body.appendChild(buttonNuevo)
buttonNuevo.textContent = "Click me please"
buttonNuevo.addEventListener('click', function() {
	console.log(this, "this is the value of this ")
})


let headerNuevo =  document.createElement('h1')
headerNuevo.value = "MONONUCLEOSIS"
document.body.appendChild(headerNuevo)
headerNuevo.textContent = "Click me please"
headerNuevo.addEventListener('click', function() {
	console.log(this, "this is the value of this ")
	
})












// let header, button, input;
// header = document.createElement("h1");
// input = document.createElement("input");
// button = document.createElement("button");
// header.textContent = "INIT header";
// input.textContent = "input";
// button.textContent = "Click me";

// input.placeholder = "Type something";

// document.body.appendChild(header);
// document.body.appendChild(input);
// document.body.appendChild(button);

// button.addEventListener('click' ,changeHeader);

// function changeHeader() {
//     header.textContent =  ''
//     header.textContent =  `${header.textContent + input.value} `

// }
