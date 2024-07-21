const arr = [2, 3, 4, 5, 6]

Array.prototype.myMap = function (cb) {
    const temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]))
    }
    return temp
}

console.log(arr.myMap((item) => {
    return item * item
}))