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

//  * 2666. Allow One Function Call
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let counter = 0 
    if(counter === 0) {
        return function (...args) {
            if (counter === 0) {
                console.log(counter)
                console.log(counter)
                counter = counter + 1
                console.log(counter)
                return fn(...args)
            }
        };
    } 
};

let bucket = once((a,b,c) => (a + b + c))
console.log(bucket(1,2,3))
console.log(bucket(2,3,6))
let bucketTwo = bucket


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//  * 2666. Allow One Function Call Finish


