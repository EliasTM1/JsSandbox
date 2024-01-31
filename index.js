var TimeLimitedCache = function () {
	this.countKeys = 0;
	this.myObjnow = {};
	this.initialTiemout = 0;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {

	let initialTimeStamp = Date.now();
	firstTime = setTimeout(() => {
		delete this.myObjnow[key];
		if (this.countKeys > 0) this.countKeys--;
		if (!this.myObjnow[key]) return -1;
	}, duration);

	// * If the object dont exist set it
	if (!this.myObjnow[key]) {
		this.initialTiemout = duration;
		this.myObjnow[key] = value;
		this.countKeys++;
		console.log(this.myObjnow)
		console.log(duration)
		return false;
	}

	// * Previously exists
	if (this.myObjnow[key]) {
		let updatedTimeStamp = Date.now();
		let difference = initialTimeStamp - updatedTimeStamp;
		let defiDiff = this.initialTiemout - difference;
		clearTimeout(firstTime);
		console.log(duration)
		setTimeout(() => {
			delete this.myObjnow[key];
			if (this.countKeys > 0) this.countKeys--;
			if (!this.myObjnow[key]) return -1;
		}, duration + defiDiff + difference);
		this.myObjnow[key] = value;
		console.log(this.myObjnow)
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
	}
	return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
	return this.countKeys;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 13, 50);
timeLimitedCache.set(2, 14, 300);
setTimeout(() => {
	timeLimitedCache.set(1, 13, 100);
}, 40);
setTimeout(() => {
	timeLimitedCache.get(2);
}, 800);
setTimeout(() => {
	timeLimitedCache.count();
}, 850);


