var TimeLimitedCache = function () {
	this.countKeys = 0;
	this.myObjnow = {};
	this.myTimestamp = Date.now();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
	// * If key exists && is unexpired,  update key with new duration
	// * Should return:
	// * TRUE: key exists and is unexpired
	// * FALSE: Key is Expired (Deleted)
let currentTime = Date.now()
	// * After the time elapsed the key will be deleted (expired)
	// * Previously exists
	let keepItDry = () => {
		if (this.countKeys > 0) this.countKeys--;
		delete this.myObjnow[key];
		if (!this.myObjnow[key]) return -1;
	};

	// * If the object dont exist set it
	if (!this.myObjnow[key]) {
		this.memoryCounter = duration;
		firstTime = setTimeout(keepItDry, duration);
		this.myObjnow[key] = value;
		this.countKeys++;
		return false;
	}

	if (this.myObjnow[key]) {
		clearTimeout(firstTime);
        let difference =  currentTime - Date.now()
        console.log(difference)
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
	console.log(key);
	// * If unexpired key. RETURN the value of that key
	// * otherwise return -1
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
timeLimitedCache.set(1, 42, 50);
timeLimitedCache.set(1, 50, 100);
timeLimitedCache.get(1);
timeLimitedCache.get(1);
timeLimitedCache.get(1);
timeLimitedCache.count();
