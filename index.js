


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



determineBuySell(myArray);

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