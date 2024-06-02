// Given an object or array obj, return a compact object.
// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys.
// A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:

let objExamOne = [null, 0, false, 1];
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:

let objExamTwo = { a: null, b: [false, 1] };
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:

let objExamThree = [null, 0, 5, [0], [false, 16]];
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

let objExamFour = [-1, 0, [0, false], true, null];
// * Output: [-1,[],true]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

let objExamCinco = [0, 1, 0, [[[null, 0], false], false], false];
let objExamCincoOutput = [1, [[[]]]];
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

let objExamSix = [0, 1, 0, [[[null, 0], false], false], false];
let objExamCincoSix = [1, [[[]]]];
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

function hasNestedArrays(arr) {
	if (!Array.isArray(arr)) {
		return false;
	}

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			arr[i] = [
				...arr[i]
					.map((element) => element !== Boolean)
					.filter((elment) => elment === Boolean),
			];
			return true;
		}

		if (hasNestedArrays(arr[i])) {
			return true;
		}
	}

	return false;
}

// hasNestedArrays(ecample);
// compactObject(objExamOne)
// compactObject(objExamTwo);
// compactObject(objExamThree);
// compactObject(objExamFour);
// compactObject(objExamCinco);

// * Stop working at test case num 66 🔽🔽🔽

// 
// function compactObject(obj) {
// 	// * We have 2 possible input Arrs ans Obj
// 	// * Seems I believe it would be easier to work each property of an object
// 	// * we will convert all arrays to objects
// 	let workObj = {};
// 	if (Array.isArray(obj)) {
// 		for (let i = 0; i < obj.length; i++) {
// 			workObj[i] = obj[i];
// 		}
// 	} else {
// 		Object.assign(workObj, obj);
// 	}

// 	for (let key in workObj) {
// 		//  * Delete the property from the object
// 		if (!workObj[key]) delete workObj[key];
// 		//  * Check if the object is an array
// 		else if (Array.isArray(workObj[key])) {
// 			workObj[key] = workObj[key].filter(Boolean);
// 			hasNestedArrays(workObj[key]);
// 		}
// 	}

// 	// * If originally obj is Arr => []
// 	if (Array.isArray(obj)) return Object.values(workObj);
// 	return workObj;
// 	// * else obj originally an Object => {}
// }
