const arr = [1, 2, [3, [5]], 6]

Array.prototype.flattenDepth = function (depth) {

    let flatArray = [];

    for (let i = 0; i < this.length; i++) {
        if (depth && Array.isArray(this[i])) {
            const returned = this[i].flattenDepth(depth - 1);
            flatArray = flatArray.concat(returned);
        } else {
            flatArray.push(this[i]);
        }
    }

    return flatArray;
}

console.log(arr.flattenDepth(1))