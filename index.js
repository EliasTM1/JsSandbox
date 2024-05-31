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

function combineAndOvewrite(arr1, arr2) {
	let result = [...arr1]

	for(let i = 0; i < arr2.length; i++) {
		console.log(arr2[i])
		if(arr2[i]) {
			console.log(result[i])
			console.log(arr2[i])
		}
	}
}



arr1 = [
	{ id: 1, x: 0, g: 2 },
	{ id: 2, e: 23, a: 55 },
	{ id: 3, y: 6, r: 11, v: 14 },
];
arr2 = [
	{ id: 2, p: 80, f: 76, k: 85 },
	{ id: 4, c: 29, k: 98 },
];

[
	{id: 1, g: 2, x: 0 },
	{id: 2, a: 55, e: 23, f: 76,  k: 85, p: 80 },
	{id: 3, r: 11, v: 14, y: 6 },
	{id: 4, c: 29, k: 98 },
];

combineAndOvewrite(arr1, arr2);

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
