var TimeLimitedCache = function () {
	this.myObjnow = {};
	this.countKeys = 0;
	this.initialDuration;
	this.timer;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
	let keepItDry = () => {
		if (this.countKeys > 0) this.countKeys--;
		delete this.myObjnow[key];
		if (!this.myObjnow[key]) return -1;
	};

	// * If the object dont exist set it
	if (!this.myObjnow[key]) {
		this.initialDuration = duration;
		this.timer = setTimeout(keepItDry, this.initialDuration);
		this.myObjnow[key] = value;
		this.countKeys++;
		return false;
	}
	if (this.myObjnow[key]) {
		clearTimeout(this.timer);
		setTimeout(keepItDry, duration);
		this.myObjnow[key] = value;
		return true;
	}
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
	if (this.myObjnow[key]) {
		return this.myObjnow[key];
	} else return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
	return this.countKeys;
};

let times = [40, 800, 850];

const timeLimitedCache = new TimeLimitedCache();
setTimeout(() => {
	timeLimitedCache.set(1, 13, 50);
	timeLimitedCache.set(2, 14, 300);
}, 0);
setTimeout(() => {
	timeLimitedCache.set(1, 15, 100);
}, 40);
setTimeout(() => {
	timeLimitedCache.get(2);
}, 800);
setTimeout(() => {
	timeLimitedCache.count();
}, 850);

// let numerObj = {
// 	2: 5,
// 	3: 8,
// 	4: 9,
// 	6: 7,
// };

// if (numerObj[2]) {
// 	console.log(numerObj[2]);
// }
// console.log(numerObj[2]);
