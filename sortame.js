// ! sort: Sorts the elements of an array in place and returns the sorted array.
// * Mutative array methis
// let myRandomArr = [
// 	5000, 21, 52, 36, 95, 4, 2, 5, 1, 25, 0, 15, 26, 48, 59, 62, 51,
// ];
let randomArgs = [
	5,4,3,2,1
];
// console.log(randomArgs.sort((a,b) =>a - b))
console.log(randomArgs.length)
for (let index = 0; index <= randomArgs.length - 1; index++) {
    console.log(index)
	for (let innerIndex = index + 1; innerIndex < randomArgs.length; innerIndex++) {
        console.log(innerIndex)
        if(randomArgs[index] > randomArgs[innerIndex]) {
            let temporal = randomArgs[index]
            randomArgs[index] = randomArgs[innerIndex]
            randomArgs[innerIndex] = temporal
        }
    }
}

let newKey = [50,20,35]
console.log(newKey.toString())
console.log(JSON.stringify(newKey))

let objectExample = {
    "[20,20,20]" : 20
}


console.log(JSON.stringify(randomArgs));
console.log(JSON.stringify(randomArgs));
randomArgs.sort();


