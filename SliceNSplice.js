 
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