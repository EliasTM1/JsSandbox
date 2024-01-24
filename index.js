/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

let args = [2],
	// t = 20,
	t = 100,
	cancelTimeMs = 50;
let timeOut = 20;

function myExampleFunction(x) {
	// return x * 5;
	return x**2;
}

console.log(t)
console.log(cancelTimeMs)
var cancellable = function (fn, args, t) {
	let itCancels = false;
    let timeOutId = setTimeout(function () {
        fn()
    },t)

    if (t < cancelTimeMs) {
        return function cancelFn() {
            fn(...args)
        }
        
        
    } else 
    {
        clearTimeout(timeOutId)
        return
    }

    return function cancelFn() {
        itCancels = cancelTimeMs > t
        console.log(itCancels)
    }

};

let cancelFn = cancellable(myExampleFunction, args, timeOut);
setTimeout(function () {
    cancelFn()
}, cancelTimeMs)
// myBucket()

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
