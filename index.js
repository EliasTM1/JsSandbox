var TimeLimitedCache = function() {
    this.myObjnow = {}
    this.countKeys = 0
    this.timer
    this.initialDuration
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {    
	let keepItDry = () => {
		if (this.countKeys > 0) this.countKeys--;
		delete this.myObjnow[key];
		if (!this.myObjnow[key]) return -1;
	};

	// * If the object dont exist set it
	if (!this.myObjnow[key]) {
		this.initialDuration = duration
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
TimeLimitedCache.prototype.get = function(key) {
	if (this.myObjnow[key]) {
		return this.myObjnow[key];
	}
	return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
       return this.countKeys;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */