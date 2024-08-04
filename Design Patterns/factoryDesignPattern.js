/** The Factory method pattern provides an interface for creating objects that can be modified after creation. The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.

This pattern is used a lot and can also be implemented in two different ways, via classes or factory functions (functions that return an object). */

function carFactory(color, type, tyreSize) {
    return {
        color,
        type,
        tyreSize,
        CC: function () {
            return Math.floor(Math.random() * 1000)
        }
    }
}

const car1 = carFactory('red', 'petrol', '17')
const car2 = carFactory('white', 'hybrid', '19')

