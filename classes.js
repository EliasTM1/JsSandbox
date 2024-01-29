




// ! PROBLEM 2622
// ! PROBLEM 2622
// ! PROBLEM 2622
var TimeLimitedCache = function() {
    this.myObjnow = {}
    this.countKeys = 0
    this.memoryCounter = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {    
	let keepItDry = () => {
		if (this.countKeys > 0) this.countKeys--;
		delete this.myObjnow[key];
		if (!this.myObjnow[key]) return -1;
	};

	// * If the object dont exist set it
	if (!this.myObjnow[key]) {
		this.memoryCounter = duration;
		firstTime = setTimeout(keepItDry, duration);
		this.myObjnow[key] = value;
		this.countKeys++;
		return false;
	}

	if (this.myObjnow[key]) {
		clearTimeout(firstTime);
		setTimeout(keepItDry, duration);
		this.myObjnow[key] = value;
		return true;
	}
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
	if (this.myObjnow[key]) {
		return this.myObjnow[key];
	}
	return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
       return this.countKeys;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
// ! FINISHED
// ! FINISHED
// ! FINISHED


let dog = {
	bark: "bark",
};

dog["eats"] = true;
dog.miaus = false

console.log(dog);
delete dog.miaus;
console.log(dog);

// * Requirements

// * Requirements

class TimeLimitedCache {
	

	set(key, value, duration) {
	
	}

	get(key) {
     
	}

	count() {
		
	}
}

let testObj = new TimeLimitedCache();
console.log(testObj.set("myArgument", 50, 5000));
console.log(testObj.get("myArgument"));
console.log(testObj.count());

//  ! Delete
let myObj = {
	a: "b",
	s: "b",
	c: "b",
};

let myArrg = ["Bob", "Elias", "Martha"];
// * to deletes elements from the array, an index needs to be passed
// delete myArrg["Elias"]
delete myArrg[0];
console.log(myArrg);

delete myObj.a;
console.log(myObj);

function SomePerson(name) {
	this.name = name;
}

SomePerson.prototype.age = 30;

const person1 = new SomePerson("Elias");
console.log(person1.age);
delete person1.age;
console.log(person1.age);
//  ! Delete

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
const zebra = new Animal("Elias", 50);

// * Constructor function
function createAnimal(name, age, time) {
	return {
		name,
		age,
		time,
	};
}

let zebraDos = createAnimal("Elias", 25, 5);
console.log(zebraDos);

function thisValue() {
	console.log(this);
	// return this
}

console.log(thisValue(), "THIS IS VAL");

function ConstructorFunctionAnimal(name, age, funcion) {
	this.name = name;
	this.age = age;
}

class MyBrowser {
	propertyThis = thisValue;
}

const browserInstance = new MyBrowser();
console.log(browserInstance.propertyThis());

// let Elefant = new ConstructorFunctionAnimal("Elias", 25, (num) => num + 3 )
// console.log(Elefant)

function saySomething() {
	console.log(this);
}

let myObject = {
	valueOfThis: saySomething,
};
console.log(myObject.valueOfThis());
