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

// ! // Possible function

function memoize(fn) {
	let totalFunctionCalls = 0;
	let argsCache = {};
    let results = 0
	if (argsCache.results)
	return function (...args) {
        totalFunctionCalls++
		let id = Date.now().toString();

		for (let i = 0; i < args.length; i++) {
			if (argsCache) {
                
			}
		}

		argsCache = {
			// ...argsCache,
			id: args,
		};
		console.log(argsCache);
		console.log(argsCache["id"]);
	};
}

let useMemoize = memoize(agrega);
useMemoize(2, 2);
useMemoize(2, 2);
useMemoize();
useMemoize(1, 2);
useMemoize();

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// * 2623. Memoize
