// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
	let bucket,
		product = [],
		isSorted = false;

	while (!isSorted) {
		for (let i = 0; i < arr.length - 1; i++) {
			let current = arr[i];
			if (current > arr[i + 1]) {
				bucket = current; 
				console.log(arr)
				arr[i] = arr[i + 1];
				arr[i + 1] = bucket;
				isSorted = false;
				continue;
			}
		}
	}
	return arr;
};

arr = [5, 4, 1, 2, 3];
function returnMe(e) {
	return e;
}
console.log(sortBy(arr, returnMe));
sortBy(arr, returnMe);

// /**
//  * @param {Array} arr
//  * @param {Function} fn
//  * @return {Array}
//  */
// var sortBy = function (arr, fn) {
// 	let bucket,
// 		product = [],
// 		isSorted = false;

// 	while (!isSorted) {
// 		for (let i = 0; i < arr.length - 1; i++) {
// 			let current = arr[i];
// 			if (current > arr[i + 1]) {
// 				bucket = current;
// 				arr[i] = arr[i + 1];
// 				arr[i + 1] = bucket;
// 				continue;
// 			}
// 			isSorted = true;
// 		}
// 	}
// 	product = arr;
// 	return product;
// };


// /**
//  * @param {Array} arr
//  * @param {Function} fn
//  * @return {Array}
//  */
// var sortBy = function(arr, fn) {
// 	let bucket,
// 		product = [],
// 		isSorted = false;

// 	while (!isSorted) {
// 		for (let i = 0; i < arr.length - 1; i++) {
//             console.log(i)
// 			if (arr[i] > arr[i + 1]) {
// 				bucket = arr[i];
// 				arr[i] = arr[i + 1];
// 				arr[i + 1] = bucket;
// 				continue;
// 			}
// 			isSorted = true;
// 		}
// 	}
// 	product = arr;
// 	return arr;
// };



// let examOneArr = [
// 	[1, 2, 3],
// 	[1, 3, 5],
// 	[1, 5, 9],
// ];
// let examOneFunc = (list) => String(list[0]);

// let examTwoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let examTwoFunc = (n) => String(n > 5);

// let examThreeArr = [{ id: "1" }, { id: "1" }, { id: "2" }];
let examThreeArr = [{ id: "1" }, { id: "1" }, { id: "2" }];
let examThreeFunc = function (item) {
	return item.id;
};
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
	let container,current, key
	container = {};
	for (let ct = 0; ct < this.length; ct++) {
		current = this[ct]
		key = fn(current);
		if(!container[key]){
			container[key] = [current]
			continue
		}
		if(container[key]){
			container[key] = [...container[key], current]
		}
	}
	return container
};

examThreeArr.groupBy(examThreeFunc); // {"1":[1],"2":[2],"3":[3]}



/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
	return this.length ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
arr.last(); // 3


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
	let temp, copyArgu, maxPossible, productArray;
	copyArgu = arr.slice();
	maxPossible = Math.ceil(arr.length / size);
	productArray = [];
	if (size === 1) return copyArgu.map((e) => [e]);
	if(maxPossible === 1) return [arr]

	for (let index = 0; index < maxPossible; index++) {
		temp = copyArgu.slice(0, size);
		productArray[index] = temp;
		copyArgu.splice(0, size);
	}
	return productArray;
};

// let oneToTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let someTestTwo = [8,5,3,2,6]
// let someTest = [1, 9, 6, 3, 2];
let someTest = ["1","2","3","4","5"]
// let product = chunk(someTest, 3);
let product = chunk(someTest, 2);
console.log(product);


// * Check if an object or an array are empty
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
	if(obj.length) return false
	for(let llave in obj) {
		if(llave) break
		return false 
	}
	return true
};

isEmpty([])
isEmpty({})


// const primerPromesa = () =>
// 	new Promise((res, rej) =>
// 		setTimeout(() => res(console.log("Resolves at 1000")), 1000)
// 	);
// const segundaPromesa = () =>
// 	new Promise((res, rej) =>
// 		setTimeout(() => res(console.log("Resolves at 2000")), 2000)
// 	);
// const terceraPromesa = () =>
// 	new Promise((res, rej) =>
// 		setTimeout(() => res(console.log("Resolves after 3000")), 3000)
// 	);

// let arrayDePromesas = [primerPromesa, segundaPromesa, terceraPromesa];

// * 2721 Execute Async myFuncs in parallel
let prodArr = [];
var promiseAll = async function (myFuncs) {
	return new Promise((res, rej) => {
		myFuncs.forEach((promise, index) => {
			promise().then((prmisePdt) => {
				prodArr[index] = prmisePdt;
				if(prodArr.every(e => e !== null) && prodArr.length === myFuncs.length) res(prodArr);
			}).catch((error) => {
				rej(error)
			});
		});
	});
};

let trash = [
	() => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
	() => new Promise((resolve) => setTimeout(() => resolve(10), 10)),
	() => new Promise((resolve) => setTimeout(() => resolve(16), 1)),
];

const promise = promiseAll(trash);
promise.then(console.log); // [42]



/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

let currentTiemout;
let previousTime = 0;
var debounce = function (fn, t) {
	previousTime = t;
	clearTimeout(currentTiemout);
	previousTime = t;
	return function (...args) {
		currentTiemout = setTimeout(() => {
			return fn(...args);
		}, previousTime);
	};
};


const log = debounce(console.log, 50);
setTimeout(()=> {
	log("Hello"); // cancelled
},50)
setTimeout(()=> {
	log("Hello"); // cancelled
},75)
log("Hello"); // Logged at t=100ms

// console.log(previousTime);



//  FINAL SOLUTION BeLOw


// var TimeLimitedCache = function () {
// 	this.storage = {};
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function (key, value, duration) {

// 	// * After the time elapsed the key will be deleted (expired)
// 	// * If the object dont exist set it
// 	if (!this.storage.hasOwnProperty(key)) {
// 		this.firstTimeout = duration;
// 		firstTime = setTimeout(() => {
// 			delete this.storage[key] 
// 			return -1;
// 		}, duration);
// 		this.storage[key] = [value, firstTime];
// 		return false;
// 	}

// 	// * Previously exists
// 	if (this.storage.hasOwnProperty(key)) {
// 		clearTimeout(this.storage[key][1]);
// 		setTimeout(() => {
// 			delete this.storage[key] 
// 			return -1;
// 		}, duration);
// 		this.storage[key] = [value, duration];
// 		return true;
// 	}
// };

// /**
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function (key) {
// 	if (this.storage[key]) {
//         return this.storage[key][0]
//     }
// 	return -1;
// };

// /**
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function () {
// 	let activeKeys = Object.keys(this.storage);
// 	return activeKeys.length;
// };

// const timeLimitedCache = new TimeLimitedCache();
// timeLimitedCache.set(1, 13, 50);
// timeLimitedCache.set(2, 14, 300);
// setTimeout(() => {
// 	timeLimitedCache.set(1, 13, 100);
// }, 40);
// setTimeout(() => {
// 	timeLimitedCache.get(2);
// }, 800);
// setTimeout(() => {
// 	timeLimitedCache.count();
// }, 850);

//  FINAL SOLUTION BeLOw





var TimeLimitedCache = function () {
	this.storage = {};
	this.firstTimeout = 0;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
	// * After the time elapsed the key will be deleted (expired)

	// * If the object dont exist set it
	if (!this.storage.hasOwnProperty(key)) {
		this.firstTimeout = duration;
		firstTime = setTimeout((key) => {
			this.storage[key] = undefined;		
			delete this.storage[key] 
			return -1;
		}, this.firstTimeout);
		this.storage[key] = [value, duration];
		return false;
	}

	// * Previously exists
	if (this.storage.hasOwnProperty(key)) {
		clearTimeout(firstTime);
		setTimeout(() => {
			this.storage[key] = undefined;		
			delete this.storage[key] 
			return -1;
		}, duration);
		this.storage[key] = [value, duration];
		return true;
	}
};

/**
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function (key) {
	if (this.storage.hasOwnProperty(key)) return this.storage[key];
	return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
	let activeKeys = Object.keys(this.storage);
	return activeKeys.length;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 13, 50);
timeLimitedCache.set(2, 14, 300);
setTimeout(function () {
	timeLimitedCache.set(1, 15, 100);
}, 40);

setTimeout(() => {
	timeLimitedCache.get(2);
	console.log(timeLimitedCache.get(2))
}, 800);

setTimeout(() => {
	timeLimitedCache.count();
}, 850);

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

let fn = async (n) => {
	await new Promise((res) => setTimeout(res, 100));
	return n * n;
};
let inputs = [5];
// let t = 50;

var timeLimit = function (fn, t) {
	return async function (...args) {
		function timeout() {
			return new Promise((resolve, rejected) => {
				setTimeout(() => {
					return rejected("Time Limit Exceeded");
				}, t);
			});
		}
		return Promise.race([fn(...args), timeout(t)]);
	};
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
	let timeoutId = setTimeout(function () {
		return fn(...args);
	}, t);

	return function cancel() {
		clearTimeout(timeoutId);
		return [];
	};
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

let args = [2],
	t = 20,
	// t = 100,
	cancelTimeMs = 50;
// cancelTimeMs = 100
let timeOut = 20;

function myExampleFunction(x) {
	return x * 5;
	// return x**2;
}

console.log(t);
console.log(cancelTimeMs);
var cancellable = function (fn, args, t) {
	let itCancels = false;
	let timeOutId = setTimeout(function () {
		fn();
	}, t);

	if (t > cancelTimeMs) {
		return function cancelFn() {
			clearTimeout(timeOutId);
		};
	} else {
		fn(...args);
	}

	return function cancelFn() {
		// itCancels = cancelTimeMs > t
		console.log(itCancels);
	};
};

let cancelFn = cancellable(myExampleFunction, args, timeOut);
setTimeout(function () {
	cancelFn();
}, cancelTimeMs);
// myBucket()

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// Given a positive integer millis, write an asynchronous
// function that sleeps for millis milliseconds. It can resolve any value.

// * Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// * Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// Constraints:

// 1 <= millis <= 1000
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve("Some");
		}, millis);
	});
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// ? 2723. Add Two Promises
// ? Easy
// Companies
// ? Given two promises promise1 and promise2, return a new promise.
// ? promise1 and promise2 will both resolve with a number.
// ? The returned promise should resolve with the sum of the two numbers.
function promiseOne() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve(2);
		}, 200);
	});
}

function promiseTwo() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => resolve(5));
	}, 300);
}

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = async function (promise1, promise2) {
	promise1().then(myPromise);
	promise2().then(myPromise);
	return new Promise(function (resolve, reject) {
		resolve();
		// resolve(resultado + resultTwo);
	});
};

addTwoPromises(promiseOne, promiseTwo);

let acommulador = 0;
function myPromise(valor) {
	return new Promise(function (resolve, reject) {
		acommulador += valor;
		resolve(acommulador);
	});
}

// let resultao = promiseOne().then(myPromise)
// let resultaoDos = promiseTwo().then(myPromise)
// console.log(resultao.then((valor) => {
//     acommulador = acommulador + valor
//     console.log(acommulador)
//     console.log(valor)
// }))
// console.log(resultaoDos.then((valor) => {
//     acommulador = acommulador + valor
//     console.log(acommulador)
//     console.log(valor)
// }))

console.log(acommulador);

// * Example 1:
// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation:
//* The two input promises resolve with the values of 2 and 5 respectively.
//* The returned promise should resolve with a value of 2 + 5 = 7.
//* The time the returned promise resolves is not judged for this problem.
// * Example 2:
// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

// Constraints:

// promise1 and promise2 are promises that resolve with a number

// * 2623. Memoize
/**
 * @param {Function} fn
 * @return {Function}
 */
/**
 * @param {number, number} agrega
 * @return {Function}
 */
/**
 * @param {number} fib
 * @return {Function}
 */
/**
 * @param {number} factorial
 * @return {Function}
 */

// *  Given a function, return a memoized version of that function
// * memo function === A function that will never be called agin with the same input
// ! // Possible function
function agrega(numOne, numTwo) {
	console.log(numOne);
	return numOne + numTwo;
}

function fib(n) {
	if (n <= 1) return 1;
	return fib(n - 1) + fib(n - 2);
}

function factorial(numero) {
	if (n <= 1) return 1;
	return factorial((numero - 1) * 1);
}

// ! // Possible function  2623. Memoize

function memoize(fn) {
	let totalFunctionCalls = 1;
	let argsCache = {};

	return function (...args) {
		if (args.length >= 1) {
			// args = args.length > 1 ? args.sort((a,b) => a - b): args
			if (!argsCache.hasOwnProperty(args)) {
				argsCache[args] = fn(...args);
				totalFunctionCalls++;
				return argsCache[args];
			} else {
				return argsCache[args];
			}
		}
		return totalFunctionCalls;
	};
}

let useMemoize = memoize(agrega);
useMemoize(1, 3);
useMemoize();
useMemoize(3, 1);
useMemoize(10, 10);
useMemoize();
// useMemoize(2, 2);
// useMemoize(2, 2);
// useMemoize();
// useMemoize(1, 2);
// useMemoize();

//  * Sort an array manually
// let args = [20,25,6,2,1,5,1,8,123]

// for (let index = 0; index <= args.length - 1; index++) {
// 	for (
// 		let innerIndex = index + 1;
// 		innerIndex < args.length;
// 		innerIndex++
// 	) {
// 		console.log(innerIndex);
// 		if (args[index] > args[innerIndex]) {
// 			let temporal = args[index];
// 			args[index] = args[innerIndex];
// 			args[innerIndex] = temporal;
// 		}
// 	}
// }

// let Person = {
// 	name: "Elias",
// 	age: 32,
// 	ownsCar: false,
// };

// console.log(Person)

// console.log(Object.keys(Person));

// console.log(Object.values(Person));
// Person = {...Person, profesion: "pro"}
// console.log(Object.keys(Person));
// console.log(Object.values(Person));
// Person = {...Person, 50: 50}
// console.log(Object.keys(Person));
// console.log(Object.values(Person));

// * 2623. Memoize

//  * 2666. Allow One Function Call
// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function (fn) {
//     let counter = 0
//     if(counter === 0) {
//         return function (...args) {
//             if (counter === 0) {
//                 counter = counter + 1
//                 return fn(...args)
//             }
//         };
//     }
// };

// let bucket = once((a,b,c) => (a + b + c))
// console.log(bucket(1,2,3))
// console.log(bucket(2,3,6))
// let bucketTwo = bucket

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//  * 2666. Allow One Function Call Finish

//
// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
// var argumentsLength = function (...args) {
// 	return args.length;
// };

// argumentsLength({}, null, "3");

/**
 * argumentsLength(1, 2, 3); // 3
 */

//  * Test Case 1
// function primus(x) {
// 	return x + 1;
// }
// function secundus(x) {
// 	return x * x;
// }
// function aurelius(x) {
// 	return 2 * x;
// }
// //  * Test Case 1

// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// var compose = function (functions) {
// 	return function (x) {
// 		let result = x;
// 		for (let j = functions.length - 1; j >= 0; j--) {
// 			result = functions[j](result);
// 		}
// 		return result;
// 	};
// };

// let useCompose = compose([primus, secundus, aurelius]); // * Composition x times 10 3 times
// console.log(useCompose(4));

// //  * Test Case 1
// function primero(x) {
//     return x * 10
// }
// function segundo(x) {
//     return x * 10
// }
// function tercero(x) {
//     return x * 10
// }
// //  * Test Case 1

// function sumOne(number) {
// 	return number + 1;
// }

// function sumTwo(number) {
// 	return number + 2;
// }

// function sumThree(number) {
// 	return number + 3;
// }

// function sumFour(number) {
// 	return number + 4;
// }

// let useCompose = compose([sumOne, sumTwo, sumThree, sumFour]); // * Composition sum plus one
//  let useCompose = compose([primero, segundo, tercero]); // * Composition x times 10 3 times

// * Create your reducer

// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// var reduceThis = function (nums, fn, init) {
// 	let acomulador = init;
// 	if (nums.length === 0) return acomulador;

// 	for (let i = 0; i < nums.length; i++) {
// 		acomulador =+ fn(acomulador, nums[i]);
// 	}
// 	return acomulador;
// };

// nums = [1, 2, 3, 4];
// function sumateEsta(accum, curr) {
// 	return accum + curr;
// }

// reduceThis(nums, sumateEsta, 0);

// let arr = [0, 10, 20, 30, 50, 62, 145, 1, 2, 3, 3, 2, 1, 5, 6, 4];
// let result = [];

// var filterMyArr = function (arr, fn) {
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (fn(arr[i], i)) {
// 			result.push();
// 		}
// 		if (fn(arr[i]), i) {
// 			result.push(arr[i]);
// 		}
// 	}
// 	return result;
// };

// function greaterThan10(n) {
// 	return n > 10;
// }
// function firstIndex(n, i) {
// 	return i === 0;
// }
// function plusOne(n) {
// 	return n + 1;
// }

// filterMyArr(arr, greaterThan10);
// console.log(result);

// * Create your own map:

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// var mapeando = function (arr, fn) {
//     let result = []
// 	for (let i = 0; i < arr.length; i++) {
//         result.push(fn(arr[i], i))
//     }
//     return result

// };

// let myArr = [1, 2, 3, 4, 5, 6];

// function plusone(n) {
// 	return n + 1;
// }

// console.log(mapeando(myArr, plusone));

// var createCounter = function (init) {
// 	let counter = init;

// 	function increment() {
// 		counter++;
// 		return counter;
// 	}

// 	function decrement() {
// 		counter--;
// 		return counter;
// 	}

// 	function reset() {
// 		counter = init;
// 		return counter;
// 	}

// 	return { increment, decrement, reset };
// };

// let contador = createCounter(5);
// console.log(contador.increment());
// console.log(contador.increment());
// console.log(contador.increment());
// console.log(contador.decrement());
// console.log(contador.decrement());
// console.log(contador.decrement());
// console.log(contador.reset());

// * To be or not to be:

// var expect = function (val) {
// 	function toBe(argValue) {
// 		if (argValue === val) {
// 			return true;
// 		} else {
// 			throw "Not Equal"
// 		}
// 	}

// 	function notToBe(argValue) {
// 		if (argValue !== val) {
// 			return true;
// 		}
//         else {
//             throw "Equal"
//         }
// 	}

// 	return { toBe, notToBe };
// };

// console.log(expect("Elias").toBe("Elias"))

// var createCounter = function (ogValue) {
// 	let countss = 0;

// 	function increment() {
// 		countss++;
// 		console.log(ogValue + countss);
// 		return countss + ogValue;
// 	}

// 	return { increment };
// };

// const counter = createCounter(10);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// ! Closures

// determineBuySell(myArray);

// ! Best time to buy and sell
// *PASSED
// let myArray = [5, 4, 9, 1, 20, 25, 5];
// let myArray = [7, 1, 5, 3, 6, 4];
// let myArray = [2,4,1];
// let myArray = [2,4,1];
// let myArray = [2,4];
// let myArray = [7,6,4,3,1]
// let myArray = [2, 5, 3, 8, 2, 4, 1];
// *PASSED
// ! ERROR
// let myArray = [3, 2, 6, 5, 0, 3];
// ! ERROR
// function determineBuySell(prices) {

// for (let i = 0; i < prices.length; i++) {
// 	console.log(i);
// 	if (minNumber > prices[i] && i !== prices.length - 1) {
// 		minNumber = prices[i];
// 		minIndex = i;
// 		console.log(minNumber);
// 	}
// }

// copiedArr = copiedArr.slice(minIndex);
// console.log(copiedArr);

// for (let i = 0; i < copiedArr.length; i++) {
// 	if (copiedArr[i] > maxNumber) {
// 		maxNumber = copiedArr[i];
// 		maxIndex = i;
// 		console.log(maxNumber);
// 	}
// }

// console.log(minNumber);
// console.log(maxNumber);
// profit = maxNumber - minNumber;
// return profit > 0 ? profit : 0;
// }

// ! Best time to buy and sell FINISH
// ? NEXT QUESTION
// ? --------------------------------------------------------------------------------
// ! Lego Towers
// function legoTowers(multipleTowers) {
// 	let maxNum = Math.max(...multipleTowers);
// 	let accomulator = 0;

// 	for (let i = 0; i < multipleTowers.length; i++) {
// 		let current = multipleTowers[i];

//         // * All towers are equal in height
// 		if (multipleTowers.every((currentVal) => currentVal === maxNum)) {
//             return 0
// 		}

//         // * Save the abs difference into accomulator and return the total of pieces you'll need to make all towers the same lenght.
// 		if (current !== maxNum) {
// 			accomulator += Math.abs(maxNum - current);
// 		}
// 	}
// 	return accomulator;
// }

// legoTowers([2 ,3, 5]);
// legoTowers([10, 10, 10]);
// ? NEXT QUESTION
// ? --------------------------------------------------------------------------------
// * Create a function that will sort an array

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]

// ? -------------------------------------------------------------------------------------------
// function sortMeArray(myDisorderdArr) {
//     let temp;
// 	for (let outter = 0; outter < myDisorderdArr.length; outter++) {
//         for(let inner = 0; inner < myDisorderdArr.length - outter - 1; inner++) {
//             if(myDisorderdArr[inner] > myDisorderdArr[inner + 1]) {
//                 temp = myDisorderdArr[inner]
// 				myDisorderdArr[inner] = myDisorderdArr[inner + 1]
// 				myDisorderdArr[inner + 1] = temp
// 			}
//         }
// 	}
// 	return myDisorderdArr
// }

// function sortBy(arr, fn) {
// 	arr.sort((a,b) => {
// 		console.log(arr)
// 		console.log(fn(a))
// 		console.log(fn(b))
// 		return fn(a) - fn(b)
// 	})

// 	console.log(arr)

// }

// let exampleOne = [5, 4, 1, 2, 3];
// let eampleTwo = [{ x: 1 }, { x: 0 }, { x: -1 }];
// let exampleThree = [
// 	[3, 4],
// 	[5, 2],
// 	[10, 1],
// ];

// let fnOne = (x) => x;
// let fnTwo = (d) => d.x;
// let fnThree = (x) => x[1];

// sortBy(exampleOne, fnOne);
// sortBy(eampleTwo, fnTwo);
// sortBy(exampleThree, fnThree);

// sortMeArray(exampleOne);
// sortMeArray(eampleTwo)
// sortMeArray(exampleThree)


// function combineAndOvewrite(arr1, arr2) {
// 	let result = {};

// 	for (let currentObj of arr1) {
// 		const currentKey = currentObj.id;
// 		result[currentKey] = currentObj;
// 	}

// 	for (let currentObj of arr2) {
// 		const currentKey = currentObj.id;
// 		if (currentKey in result) {
// 			Object.assign(result[currentKey], currentObj);
// 		} else {
// 			result[currentKey] = currentObj;
// 		}
// 	}
// 	return Object.values(result)
// }

// arr1 = [
// 	{ id: 1, x: 0, g: 2 },
// 	{ id: 2, e: 23, a: 55 },
// 	{ id: 3, y: 6, r: 11, v: 14 },
// ];
// arr2 = [
// 	{ id: 2, p: 80, f: 76, k: 85 },
// 	{ id: 4, c: 29, k: 98 },
// ];

// [
// 	{ id: 1, g: 2, x: 0 },
// 	{ id: 2, a: 55, e: 23, f: 76, k: 85, p: 80 },
// 	{ id: 3, r: 11, v: 14, y: 6 },
// 	{ id: 4, c: 29, k: 98 },
// ];

// combineAndOvewrite(arr1, arr2);


// ? Joining 2 arrays

//  Example  2
// Regresa un array que contenga los valores de arrOne and Arr2

// function combineAndOvewrite(arr1, arr2) {
// 	let result = [...arr1];

// 	for (let i = 0; i < arr2.length; i++) {
// 		if (result.some((element) => element.id === arr2[i].id)) {
// 			result = result.map(
// 				(element) => arr2.find((e) => e.id === element.id) || element
// 			);
// 		} else {
// 			result.push(arr2[i]);
// 		}

// 		for (const iterator in arr1[0]) {
// 			if (!Object.keys(result[0]).includes(iterator)) {
// 				result[0][iterator] = arr1[0][iterator];
// 			}
// 		}

// 		console.log(result);
// 	}
// 	return result;
// }

// * Return a combined array
// * If an item exist in one array but not in the other one, it should be included in the returned array
// * If the 2 arrays share an id they this property should be merged
// ? If a key exist only in one object it should merged
// ? If an element is included in both it arr2 should overwrite the arr1 property
// * Revisa los id's de arr2 contra arr1
// * Si un id existe en ambas:
// * Sobreescribe las propiedades repetidas, y manten las no repetidas en un unico objecto
// * id de arr2 no existe en arr1 no existe:
// * agrega el objeto a arr1 en arr2



// arr1 = [{
// 		id: 1,
// 		b: { b: 94 },
// 		v: [4, 3],
// 		y: 48
// 	}];

// arr2 = [{
// 		id: 1,
// 		b: { c: 84 },
// 		v: [1, 3]
// 	}];

// Output: [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];

// * Solved
// let exampleArrOneNested = [
// 	{ id: 1, x: 2, y: 3 },
// 	{ id: 2, x: 3, y: 6 },
// ];
// let ExampleArrTwoNested = [
// 	{ id: 2, x: 10, y: 20 },
// 	{ id: 3, x: 0, y: 0 },
// ];
// combineAndOvewrite(exampleArrOneNested, ExampleArrTwoNested);

// * Expected output:
// Output: [
// 	{ id: 1, x: 2, y: 3 },
// 	{ id: 2, x: 10, y: 20 },
// 	{ id: 3, x: 0, y: 0 },
// ];

// * Solved
// let exampleArrOne = [
// 	{ id: 1, x: 1 },
// 	{ id: 2, x: 9 },
// ];
// let ExampleArrTwo = [{ id: 3, x: 5 }];
// combineAndOvewrite(exampleArrOne, ExampleArrTwo);
//  Result
// ? Since we dont have duplicates the array dont need to overwrite anything
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]



// ? Flat arrays

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

// Example 1:

// Input
// let arrExamOne = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// let nExamOne = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Explanation
// Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.
// Example 2:

// Input
// let arrExamTwo = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// let nExamTwo = 1
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Explanation
// The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
// Example 3:

// Input
// let arrExamThree = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// let nExamThree = 2
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Explanation
// The maximum depth of any subarray is 1. Thus, all of them are flattened.

// var flat = function (arr, n) {
// 	let resultObj = {}
// 	if(n === 0) {
// 		return arr
// 	}

// 	for(let i = 0; i < arr.length; i++) {
// 		resultObj[i] = arr[i]
// 	}

// 	for(let j = 0; j < arr.length; j++) {
// 		if(Array.isArray(resultObj[j])) {
// 			let currentArr = resultObj[j]
// 			// resultObj[j] =
// 			// for(let k = 0; k < currentArr.length; k++){
// 			// }
// 		}
// 	}
// 	// else {

// 	// }

// };

// flat(arrExamOne, nExamOne)
// flat(arrExamTwo, nExamTwo);
// flat(arrExamThree, nExamThree)

// * Compact
// var compactObject = function (obj) {

// let resultArr = [];
// let bucketObj = {};

// if (Array.isArray(obj)) {
// 	for (let i = 0; i < obj.length; i++) {
// 		bucketObj[i] = obj[i];
// 	}

// 	for (let key in bucketObj) {
// 		if (!bucketObj[key]) {
// 			delete bucketObj[key];
// 		} else if (Array.isArray(bucketObj[key])) {
// 			bucketObj[key].filter((e, index) => {
// 				if (!e) {
// 					return bucketObj[key].splice(index, 1);
// 				}
// 			});
// 		}
// 	}
// 	return Object.values(bucketObj);
// } else {
// 	for (key in obj) {
// 		if (!obj[key]) {
// 			delete obj[key];
// 		} else if (Array.isArray(obj[key])) {
// 			obj[key] = obj[key].filter((e, index) => {
// 				if (e) return obj[key];
// 			});
// 		}
// 	}
// 	return obj;
// }
// };


// Given an object or array obj, return a compact object.
// // A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys.
// // A value is considered falsy when Boolean(value) returns false.
// // You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// // Example 1:

// let objExamOne = [null, 0, false, 1];
// // Output: [1]
// // Explanation: All falsy values have been removed from the array.
// // Example 2:

// let objExamTwo = { a: null, b: [false, 1] };
// // Output: {"b": [1]}
// // Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// // Example 3:

// let objExamThree = [null, 0, 5, [0], [false, 16]];
// // Output: [5, [], [16]]
// // Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// let objExamFour = [-1, 0, [0, false], true, null];
// // * Output: [-1,[],true]
// // Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// let objExamCinco = [0, 1, 0, [[[null, 0], false], false], false];
// let objExamCincoOutput = [1, [[[]]]];
// // Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// let objExamSix = [0, 1, 0, [[[null, 0], false], false], false];
// let objExamCincoSix = [1, [[[]]]];
// // Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// // function compactObject(obj) {
// // 	// * We have 2 possible input Arrs ans Obj
// // 	// * Seems I believe it would be easier to work each property of an object
// // 	// * we will convert all arrays to objects
// // 	let workObj = {};
// // 	if (Array.isArray(obj)) {
// // 		for (let i = 0; i < obj.length; i++) {
// // 			workObj[i] = obj[i];
// // 		}
// // 	} else {
// // 		Object.assign(workObj, obj);
// // 	}

// // 	for (let key in workObj) {
// // 		//  * Delete the property from the object
// // 		if (!workObj[key]) delete workObj[key];
// // 		//  * Check if the object is an array
// // 		else if (Array.isArray(workObj[key])) {
// // 			workObj[key] = workObj[key].filter(Boolean);
// // 			// hasNestedArrays(workObj[key]);
// // 		}
// // 	}

// // 	console.log(Object.values(workObj))
// // 	// * If originally obj is Arr => []
// // 	if (Array.isArray(obj)) return Object.values(workObj);
// // 	return workObj;
// // 	// * else obj originally an Object => {}
// // }

// // function hasNestedArrays(arr) {
// // 	if (!Array.isArray(arr)) {
// // 		return false;
// // 	}

// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (Array.isArray(arr[i])) {
// // 			arr[i] = [arr[i]
// // 					.map((element) => element !== Boolean)
// // 					.filter((elment) => elment === Boolean)]
// // 					return true;
// // 		}

// // 		if (hasNestedArrays(arr[i])) {
// // 			return true;
// // 		}
// // 	}

// // 	return false;
// // }

// // hasNestedArrays([3[false, [4, [false]]]])

// // compactObject(objExamOne)
// // compactObject(objExamTwo);
// // compactObject(objExamThree);
// // compactObject(objExamFour);
// // compactObject(objExamCinco);
// // compactObject(objExamSix);

// // * Example 1:

// // Input:
// let nums = [
// 		[1, 2],
// 		[3, 4],
// 	],
// 	operation = "Add";
// // Output: 10
// // Explanation:
// // const obj1ExamOne = new ArrayWrapper([1,2]);
// // const obj2ExamOne = new ArrayWrapper([3,4]);
// // obj1 + obj2; // * 10
// // * Example 2:

// let numsTwo = [[23, 98, 42, 70]],
// 	operationTwo = "String";
// // Output: // * "[23,98,42,70]"
// // Explanation:
// // const obj = new ArrayWrapper([23,98,42,70]);
// // String(obj); // * "[23,98,42,70]"

// // * Example 3:

// let numsTres = [[], []],
// 	operationTres = "Add";
// Output: 0;
// // const obj1 = new ArrayWrapper([]);
// // const obj2 = new ArrayWrapper([]);
// // obj1 + obj2; // * 0

// Explanation: var ArrayWrapper = function (nums) {
// 	this.nums = nums;
// };

// /**
//  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function () {
// 	console.log(this.nums);
// 	return this.nums.reduce((a, b) => a + b);
// };

// /**
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function () {
// 	let strResult = "";
// 	let lastEle = this.nums.length - 1;

// 	for (let i = 0; i < this.nums.length; i++) {
// 		console.log(i);
// 		if (i === 0) {
// 			console.log(this.nums);
// 			strResult = strResult.concat(`[${this.nums[i]},`);
// 			continue;
// 		}
// 		if (i === this.nums.length - 1) {
// 			strResult = strResult.concat(`${this.nums[i]}]`);
// 			continue;
// 		} else {
// 			strResult = strResult.concat(`${this.nums[i]},`);
// 			continue;
// 		}
// 	}

// 	// this.nums.map((e, index) => {
// 	// 	switch (index) {
// 	// 		case 0:
// 	// 			strResult = strResult.concat(`[${e}`);
// 	// 			break;
// 	// 		case lastEle:
// 	// 			strResult = strResult.concat(`,${e}]`);
// 	// 			break;
// 	// 		default:
// 	// 			strResult = strResult.concat(`,${e}`);
// 	// 			break;
// 	// 	}
// 	// });
// 	return strResult;
// };

// // const obj1 = new ArrayWrapper([1, 2]);
// // const obj2 = new ArrayWrapper([3, 4]);
// // console.log(obj1.valueOf());
// // console.log(obj2);
// const obj1 = new ArrayWrapper([1, 2, 3, 4, 5, 6]);

// console.log(obj1.toString());
