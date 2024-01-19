// TODO:

// ! push: Adds one or more elements to the end of an array and returns the new length.
// ! pop: Removes the last element from an array and returns that element.
// ! shift: Removes the first element from an array and returns that element.
// ! unshift: Adds one or more elements to the beginning of an array and returns the new length.
// ! concat:  Combines two or more arrays and returns a new array.
// ! indexOf: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// ! includes: Determines whether an array includes a certain element, returning a boolean.
// ! forEach: Executes a provided function once for each array element.
// ! map: Creates a new array with the results of calling a provided function on every element in the array.
// ! filter: Creates a new array with all elements that pass the test implemented by the provided function.
// ! reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// ! sort: Sorts the elements of an array in place and returns the sorted array.
// ! reverse: Reverse the elements of an array in place

// ! Function composition:



// ! ARCHIVE

//  * Count the number of arguments an return that number 

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
    };
    
    argumentsLength({}, null, "3")
    
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

let examples = [1, 2, 3, 4, 5, 6, 7];
// ! SLICE ===========
// ! Slice take index and the second argument is not inclusive
// * Positives
console.log(examples.slice());
console.log(examples.slice(1));
console.log(examples.slice(2));
console.log(examples.slice(0, 2));
console.log(examples.slice(0, 4));
console.log(examples.slice(1, 4));
console.log(examples.slice(3, 5));
// * Negatives
console.log(examples.slice(-1));
console.log(examples.slice(-2));
console.log(examples.slice(-4));
console.log(examples.slice(-6));
// ! SLICE ===========

// ! SPLICE ===========
// ! 1. get a section from a selectect
// ! SPLICE ===========
// ! SPLICE ===========
// * Positives
//  ! When using 2 arguments =>
// * The first argument of slice if the INDEX that will become the value[0] of the array
// * The secons argument is the new length of the array that will result

let spliceExample1 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceExample1.splice(0));

let spliceExample2 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceExample2.splice(0, 2));

let spliceExample3 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceExample3.splice(0, 4));

let spliceExample4 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceExample4.splice(1, 4));

let spliceExample5 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceExample5.splice(3, 3));

let spliceExample6 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceExample6.splice(5, 10));

// * Inster without eliminating
// ! First argument is the index of where we want to insert the new element
// ! Second argument is the number of places we want to delete after the insertion
// ! Third argument will be the insertion

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, 1000);
console.log(months);

const months2 = ["Jan", "March", "April", "June"];
months2.splice(1, 1, 1000);
console.log(months2);

const months3 = ["Jan", "March", "April", "June"];
months3.splice(0, 0, 600);
console.log(months3);

// * Inster  eliminating

// * Insert in position one and eliminate the next one with the second argument provided
const monthsDel = ["Jan", "March", "April", "June"];
monthsDel.splice(1, 0, 1000);
console.log(monthsDel);

const monthsDel2 = ["Jan", "March", "April", "June"];
monthsDel2.splice(0, 2, 600);
console.log(monthsDel2);

const monthsDel3 = ["Jan", "March", "April", "June"];
monthsDel3.splice(1, 0, 600);
console.log(monthsDel3);

// *  Replaces 1 element at index 4
months.splice(4, 1, "May");
console.log(months);
// ! SPLICE ===========

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
