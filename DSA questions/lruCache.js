class LRU {
  capacity = 0;
  cacheStore = new Map();

  constructor(c) {
    this.capacity = c;
  }

  get(key) {
    const cachedValue = this.cacheStore.get(key);

    if (cachedValue) {
      cachedValue.time = new Date().getTime();
      this.cacheStore.set(key, { ...cachedValue });
      console.log(`updated --> ${key} value to ${cachedValue.time}`);
      return this.cacheStore.get(key);
    }
    return null;
  }

  put(key, value) {
    //If capacity is available add element
    if (this.cacheStore.size - this.capacity) {
      this.cacheStore.set(key, { value: value, time: new Date().getTime() });
    } else {
      // Removed least recently used item and add current one

      let leastRecentlyUsedKey = null;
      let leastRecentlyUserValue = new Date().getTime();

      for (let [key, value] of this.cacheStore) {
        if (value.time < leastRecentlyUserValue) {
          leastRecentlyUserValue = value.time;
          leastRecentlyUsedKey = key;
        }
      }

      if (leastRecentlyUsedKey) {
        console.log("Deleting -->", leastRecentlyUsedKey);
        this.cacheStore.delete(leastRecentlyUsedKey);
        console.log(`Adding-->${key} in place of ${leastRecentlyUsedKey}`);
        this.cacheStore.set(key, { value: value, time: new Date().getTime() });
      }
    }
  }

  getAll() {
    return this.cacheStore;
  }
}

const lru = new LRU(10);

lru.put("obj1", 1000);
lru.put("obj2", 2000);
lru.put("obj3", 3000);
lru.put("obj4", 4000);
lru.put("obj5", 5000);
lru.put("obj6", 6000);
lru.put("obj7", 7000);
lru.put("obj8", 8000);
lru.put("obj9", 9000);
lru.put("obj10", 11000);

console.log(lru.getAll());

setTimeout(() => {
  console.log(lru.get("obj1"));
}, 100);

setTimeout(() => {
  console.log(lru.get("obj2"));
}, 200);

setTimeout(() => {
  console.log(lru.get("obj5"));
}, 600);

setTimeout(() => {
  console.log(lru.get("obj9"));
}, 900);

setTimeout(() => {
  lru.put("obj11", 12000);
  console.log("added new item");
}, 3000);

setTimeout(() => {
  console.log(lru.getAll());
}, 5000);
