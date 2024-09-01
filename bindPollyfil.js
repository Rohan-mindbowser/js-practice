// The bind() takes an object as an argument and returns a new function whose this refers to the object we passed as an argument.

let obj = {
    name: 'rohan'
}


Function.prototype.myBind = function (obj) {
    const func = this
    return function () {
        func.apply(obj)
    }
}


const testObj = {
    name: 'sid',
    print: function () {
        console.log(`My name is ${this.name}`)
    }
}

testObj.print.myBind(testObj)()