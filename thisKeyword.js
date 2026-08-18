// ============================================================
// THE "this" KEYWORD IN JAVASCRIPT — Interview Guide
// ============================================================
// "this" refers to the object that is executing the current function.
// Its value depends on HOW a function is called, not WHERE it's defined.

// ============================================================
// 1. "this" IN GLOBAL SCOPE
// ============================================================
// In browser: this === window
// In Node.js:  this === module.exports (in file scope), global (in functions)

console.log(this); // In browser: Window, In Node: {}

// ============================================================
// 2. "this" INSIDE AN OBJECT METHOD
// ============================================================
// When a function is called as a method of an object, "this" = that object

const user = {
  name: "Rohan",
  greet() {
    console.log(this.name); // "Rohan" — this = user object
  },
};
user.greet(); // "Rohan"

// INTERVIEW TRAP: Extracting the method loses "this" binding
const greetFn = user.greet;
greetFn(); // undefined — "this" is now global/undefined (not the user object)

// ============================================================
// 3. "this" INSIDE A REGULAR FUNCTION
// ============================================================
// In non-strict mode: this = window (browser) / global (Node)
// In strict mode:     this = undefined

function showThis() {
  console.log(this);
}
showThis(); // Window (non-strict) or undefined (strict mode)

// Strict mode example
function showThisStrict() {
  "use strict";
  console.log(this); // undefined
}
showThisStrict();

// ============================================================
// 4. "this" INSIDE AN ARROW FUNCTION
// ============================================================
// Arrow functions do NOT have their own "this".
// They INHERIT "this" from the enclosing lexical scope (where they are defined).
// This is called "lexical this" — it CANNOT be changed by call/apply/bind.

const person = {
  name: "Rohan",
  // Regular function — this = person
  greetRegular() {
    console.log("Regular:", this.name); // "Rohan"
  },
  // Arrow function — this = enclosing scope (NOT person, but the outer scope)
  greetArrow: () => {
    console.log("Arrow:", this.name); // undefined — "this" is from outer scope
  },
};
person.greetRegular(); // "Rohan"
person.greetArrow(); // undefined

// KEY TAKEAWAY: Never use arrow functions as object methods!

// ============================================================
// 5. ARROW FUNCTION INSIDE A METHOD — MOST ASKED IN INTERVIEWS
// ============================================================
// Arrow function inside a regular method inherits "this" from the method

const team = {
  name: "Engineering",
  members: ["Alice", "Bob"],
  showMembers() {
    // "this" here = team (because showMembers is a regular function)
    this.members.forEach((member) => {
      // Arrow function inherits "this" from showMembers → team
      console.log(`${member} belongs to ${this.name}`);
    });
  },
};
team.showMembers();
// "Alice belongs to Engineering"
// "Bob belongs to Engineering"

// Compare with regular function inside method — BREAKS!
const team2 = {
  name: "Design",
  members: ["Carol", "Dave"],
  showMembers() {
    this.members.forEach(function (member) {
      // Regular function creates its own "this" → window/undefined
      console.log(`${member} belongs to ${this.name}`); // this.name = undefined!
    });
  },
};
team2.showMembers();
// "Carol belongs to undefined"
// "Dave belongs to undefined"

// FIX 1: Use arrow function (shown above in team example)
// FIX 2: Save reference — const self = this; then use self.name
// FIX 3: Pass thisArg to forEach — forEach(fn, this)

// ============================================================
// 6. "this" WITH call(), apply(), bind()
// ============================================================
// These methods let you EXPLICITLY set what "this" refers to.

function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const person1 = { name: "Rohan" };
const person2 = { name: "Priya" };

// call — invokes immediately, args passed individually
introduce.call(person1, "Mumbai", "India"); // "Rohan from Mumbai, India"

// apply — invokes immediately, args passed as array
introduce.apply(person2, ["Delhi", "India"]); // "Priya from Delhi, India"

// bind — returns a NEW function with "this" permanently bound, does NOT invoke
const rohanIntro = introduce.bind(person1, "Pune");
rohanIntro("India"); // "Rohan from Pune, India"

// INTERVIEW POINT: bind returns a new function; call/apply invoke immediately
// INTERVIEW POINT: Arrow functions IGNORE call/apply/bind for "this"
const arrowFn = () => console.log(this);
arrowFn.call(person1); // Still the outer "this", NOT person1

// ============================================================
// 7. "this" INSIDE A CONSTRUCTOR FUNCTION
// ============================================================
// When called with "new", "this" refers to the newly created object

function Car(brand) {
  this.brand = brand;
  console.log(this); // Car { brand: "Tesla" }
}
const myCar = new Car("Tesla");
console.log(myCar.brand); // "Tesla"

// Without "new", "this" would be window/global (dangerous!)
// const badCar = Car("BMW"); // this.brand pollutes global scope

// ============================================================
// 8. "this" INSIDE A CLASS
// ============================================================
// In classes, "this" refers to the instance of the class
// Class methods behave like regular functions for "this"

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  // Arrow function as class field — "this" is always the instance
  speakArrow = () => {
    console.log(`${this.name} makes a sound (arrow)`);
  };
}

const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound"
dog.speakArrow(); // "Dog makes a sound (arrow)"

// INTERVIEW TRAP: Passing class method as callback
const speak = dog.speak;
// speak(); // TypeError: Cannot read property 'name' of undefined

const speakArrow = dog.speakArrow;
speakArrow(); // "Dog makes a sound (arrow)" — arrow keeps "this"!

// KEY TAKEAWAY: Use arrow functions for class methods that will be passed as callbacks
// (e.g., React event handlers, setTimeout callbacks)

// ============================================================
// 9. "this" INSIDE setTimeout / setInterval
// ============================================================

const timer = {
  name: "Timer",

  // PROBLEM: Regular function inside setTimeout loses "this"
  startBroken() {
    setTimeout(function () {
      console.log(this.name); // undefined — "this" = window
    }, 100);
  },

  // FIX: Arrow function preserves "this" from startFixed
  startFixed() {
    setTimeout(() => {
      console.log(this.name); // "Timer" — arrow inherits "this"
    }, 100);
  },
};

timer.startBroken(); // undefined
timer.startFixed(); // "Timer"

// ============================================================
// 10. "this" INSIDE EVENT LISTENERS (BROWSER)
// ============================================================
// In event listeners, "this" = the DOM element that triggered the event

// Regular function: "this" = button element
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this); // <button> element
// });

// Arrow function: "this" = outer scope (NOT the element!)
// document.querySelector("button").addEventListener("click", () => {
//   console.log(this); // Window — NOT the button!
// });

// KEY TAKEAWAY: Use regular functions for event listeners when you need "this" = element

// ============================================================
// 11. "this" WITH NESTED FUNCTIONS
// ============================================================

const obj = {
  value: 42,
  getValue() {
    console.log(this.value); // 42

    function inner() {
      console.log(this.value); // undefined — inner has its own "this"
    }
    inner();

    const innerArrow = () => {
      console.log(this.value); // 42 — arrow inherits from getValue
    };
    innerArrow();
  },
};
obj.getValue();

// ============================================================
// 12. "this" WITH PROTOTYPE METHODS
// ============================================================

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`); // "this" = the instance
};

const u = new User("Rohan");
u.sayHi(); // "Hi, I'm Rohan"

// ============================================================
// 13. "this" IN METHOD CHAINING
// ============================================================
// Return "this" from methods to enable chaining

class Builder {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    return this; // enables chaining
  }
  build() {
    return this.items.join(", ");
  }
}

const result = new Builder().add("a").add("b").add("c").build();
console.log(result); // "a, b, c"

// ============================================================
// 14. EXPLICIT BINDING PRIORITY (INTERVIEW IMPORTANT)
// ============================================================
// "this" binding priority (highest to lowest):
//
// 1. new binding         → new Foo()           → this = new object
// 2. Explicit binding    → call/apply/bind     → this = specified object
// 3. Implicit binding    → obj.method()        → this = obj
// 4. Default binding     → standalone call     → this = window/undefined
//
// Arrow functions SKIP all of the above — they ALWAYS use lexical "this"

// ============================================================
// 15. COMMON INTERVIEW QUESTIONS ↓
// ============================================================

// Q1: What is the output?
const obj1 = {
  name: "obj1",
  getName: function () {
    return this.name;
  },
};
const obj2 = { name: "obj2", getName: obj1.getName };
console.log(obj1.getName()); // "obj1" — called on obj1
console.log(obj2.getName()); // "obj2" — called on obj2 (implicit binding)

// Q2: What is the output?
const obj3 = {
  name: "obj3",
  inner: {
    name: "inner",
    getName() {
      return this.name;
    },
  },
};
console.log(obj3.inner.getName()); // "inner" — this = obj3.inner

// Q3: What is the output?
const obj4 = {
  name: "obj4",
  getName: () => {
    return this.name;
  },
};
console.log(obj4.getName()); // undefined — arrow function, this = outer scope

// Q4: Fix this code
const counter = {
  count: 0,
  increment() {
    // Problem: "this" inside setInterval callback
    // setInterval(function() { this.count++; }, 1000); // BROKEN

    // Fix: use arrow function
    setInterval(() => {
      this.count++;
    }, 1000);
  },
};

// Q5: What is the output?
function foo() {
  console.log(this.a);
}
const obj5 = { a: 2, foo };
const obj6 = { a: 3, foo };

obj5.foo(); // 2
obj6.foo(); // 3
obj5.foo.call(obj6); // 3 — explicit binding wins over implicit

// ============================================================
// CHEAT SHEET SUMMARY
// ============================================================
//
// | Context                        | "this" refers to              |
// |--------------------------------|-------------------------------|
// | Global scope                   | window / global / undefined   |
// | Object method                  | The object                    |
// | Regular function               | window / undefined (strict)   |
// | Arrow function                 | Enclosing lexical scope       |
// | Constructor (new)              | The new instance              |
// | call / apply / bind            | The specified object          |
// | Event listener (regular fn)    | The DOM element               |
// | Event listener (arrow fn)      | Outer scope (NOT element)     |
// | Class method                   | The instance                  |
// | setTimeout (regular fn)        | window / undefined            |
// | setTimeout (arrow fn)          | Enclosing scope               |
//
// GOLDEN RULES:
// 1. Arrow functions NEVER have their own "this"
// 2. "this" depends on HOW a function is CALLED, not where it's defined
// 3. call/apply/bind can override "this" for regular functions only
// 4. "new" always creates a fresh "this"
// 5. When in doubt, console.log(this) to check!
