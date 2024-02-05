/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let bucket, product = [], isSorted = false

	while (!isSorted) {
		for(let i = 0; i < arr.length - 1; i++) {
			let current = arr[i]
			if(current < arr[i + 1]) {
				bucket = current
				current = arr[i + 1]
				arr[i + 1] = bucket
				continue
			}
			isSorted = true
		}
	}
    return product 

};

arr = [5, 4, 1, 2, 3]
function returnMe(e) {return e}
sortBy(arr, returnMe)

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