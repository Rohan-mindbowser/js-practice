/** CALL */

// Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

const newPerson = {
    name: "sid kadam",
    email: "sid@gmail.com",
}

const person1 = {
    name: "rohan kadam",
    email: "r@gmail.com",
    print: function (...args) {
        console.log(`Hello ${this.name}`, ...args)
    }
}

// person1.print.call(newPerson)

/** CALL ENDS */


/** APPLY */
// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.


person1.print.apply(newPerson, [1, 2, 3])


/** BIND */
// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

const newFunc = person1.print.bind(newPerson, [1, 2, 3])
// newFunc()