
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
				argsCache[args] = fn(...args)
				totalFunctionCalls++
				return argsCache[args]
			} else {
				return argsCache[args]
			}
		}
		return totalFunctionCalls
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
 