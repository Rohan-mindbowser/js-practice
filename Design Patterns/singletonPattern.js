class Counter {
    counter = 0
    incrementCount = () => {
        this.counter++
    }
    decrementCount = () => {
        this.counter--
    }
}

//Created self invoking function and returned single instance
const singleTon = (function () {
    let instance;

    return {
        getInstance() {
            if (!instance) {
                instance = new Counter
            }
            return instance
        }
    }
}())

const obj1 = singleTon.getInstance()
const obj2 = singleTon.getInstance()

obj1.incrementCount()
obj1.incrementCount()
obj2.incrementCount()
obj2.incrementCount()
console.log(obj1.counter)
