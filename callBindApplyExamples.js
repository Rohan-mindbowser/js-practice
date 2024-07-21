// const obj = {
//     message: 'hello'
// }

// function print() {
//     console.log(this.message)
// }

// // print.apply(obj)
// print()

function sum(a) {
    return (b) => {
        return b ? sum(a + b) : a
    }
}

console.log(sum(2)(2)(3)(4)())