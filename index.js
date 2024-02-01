/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

let currentTiemout;
let previousTime = 0
var debounce = function (fn, t) {
	clearTimeout(currentTiemout);
	return function (...args) {
		currentTiemout = setTimeout(() => fn(args), t);
	};
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
