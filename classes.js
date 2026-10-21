// ===================== 1. Private properties & methods (#) =====================
/*
  NOTES:
  - Add `#` before a name to make it private: `#balance`, `#log()`.
  - Private members can only be used INSIDE the class body.
    Outside code gets a SyntaxError if it tries `obj.#balance`.
  - `#balance` and `balance` are two different names.
  - To let outside code read/change private data, expose public methods
    or getters/setters (e.g. getBalance()).
  - Private members are NOT inherited — a child class can't touch them directly.
  - `#field in obj` checks whether obj was created by this class ("brand check").
  - `_name` is only a naming convention; it is NOT actually private.
  - Before `#` existed, closures were used to hide data (see Counter below).
*/

class BankAccount {
  #balance = 0; // private field
  static #count = 0; // private static field

  constructor(owner) {
    this.owner = owner; // public field
    BankAccount.#count++;
  }

  #log(msg) {
    // private method
    console.log(`[${this.owner}] ${msg}`);
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.#balance += amount;
    this.#log(`Deposited ${amount}`);
  }

  getBalance() {
    return this.#balance;
  }

  static getCount() {
    return BankAccount.#count;
  }

  static isAccount(obj) {
    return #balance in obj; // brand check
  }
}

console.log("----- Private -----");
const acc = new BankAccount("Rohan");
acc.deposit(100); // [Rohan] Deposited 100
console.log(acc.getBalance()); // 100
console.log(acc.balance); // undefined (different, public name)
console.log(BankAccount.getCount()); // 1
console.log(BankAccount.isAccount(acc)); // true
console.log(BankAccount.isAccount({})); // false
// acc.#balance; // SyntaxError if uncommented

// Closure-based privacy (pre-# approach)
function Counter() {
  let count = 0;
  return { inc: () => ++count, get: () => count };
}
const c = Counter();
c.inc();
c.inc();
console.log(c.get()); // 2

// ===================== 2. static =====================
/*
  NOTES:
  - `static` members belong to the CLASS itself, not to objects made from it.
  - Call them on the class: `MathUtil.square(4)`, not `new MathUtil().square(4)`.
  - Use for: helper/utility functions, constants, counters, caches,
    and factory methods (methods that create instances, like User.fromJSON).
  - Inside a static method, `this` refers to the class, not an instance.
  - `static { ... }` is a block that runs once when the class is defined —
    handy for one-time setup.
  - Static members ARE inherited by child classes (Dog.kingdom below).
*/

class MathUtil {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }

  static {
    console.log("MathUtil loaded"); // runs once, when class is defined
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  static fromJSON(json) {
    return new User(JSON.parse(json).name); // factory method
  }
}

console.log("----- Static -----");
console.log(MathUtil.square(4)); // 16
console.log(MathUtil.PI); // 3.14159
console.log(typeof new MathUtil().square); // undefined (not on instances)
console.log(User.fromJSON('{"name":"Rohan"}').name); // Rohan

// ===================== 3. Getters & setters =====================
/*
  NOTES:
  - A getter (`get x()`) runs when you READ a property:   obj.x
  - A setter (`set x(v)`) runs when you ASSIGN a property: obj.x = 5
  - They look like normal properties from outside (no parentheses),
    but let you run code: validation, conversion, computed values.
  - Great pair with private fields: keep data in `#x`, control access via get/set.
  - A getter without a setter = read-only property.
  - Gotcha: never store the value under the same name inside the setter
    (`set x(v) { this.x = v }` calls itself forever). Use `#x` instead.
*/

class Temperature {
  #celsius = 0;

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    if (typeof value !== "number") throw new TypeError("Must be a number");
    this.#celsius = value;
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }

  set fahrenheit(f) {
    this.#celsius = ((f - 32) * 5) / 9;
  }
}

console.log("----- Getter / Setter -----");
const t = new Temperature();
t.celsius = 25;
console.log(t.fahrenheit); // 77
t.fahrenheit = 212;
console.log(t.celsius); // 100
try {
  t.celsius = "hot";
} catch (e) {
  console.log(e.message); // Must be a number
}

// ===================== 4. extends & super =====================
/*
  NOTES:
  - `class Dog extends Animal` → Dog gets all of Animal's methods,
    getters/setters and static members (inheritance = code reuse).
  - A child can OVERRIDE a parent method by defining one with the same name.
  - `super(args)` calls the parent's constructor.
    In a child constructor you MUST call super() before using `this`.
  - If the child has no constructor, JS adds one that calls super(...args).
  - `super.method()` calls the parent's version of an overridden method —
    useful to extend behavior instead of rewriting it.
  - `super` also works in getters (`super.name`) and static methods.
  - `instanceof` is true for the class and all its parents.
*/

class Animal {
  #name;
  static kingdom = "Animalia";

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  speak() {
    return `${this.#name} makes a sound`;
  }

  static create(name) {
    return new this(name); // `this` = the calling class
  }
}

class Dog extends Animal {
  #breed;

  constructor(name, breed = "Unknown") {
    super(name); // must be called before using `this`
    this.#breed = breed;
  }

  speak() {
    const base = super.speak(); // parent version
    return `${base}... Woof! (${this.#breed})`;
  }

  get name() {
    return `🐶 ${super.name}`; // parent getter
  }

  static create(name) {
    console.log("Creating a dog");
    return super.create(name); // super in static method
  }
}

console.log("----- extends / super -----");
const d = new Dog("Bruno", "Labrador");
console.log(d.speak()); // Bruno makes a sound... Woof! (Labrador)
console.log(d.name); // 🐶 Bruno
console.log(Dog.kingdom); // Animalia (static inherited)
console.log(d instanceof Dog, d instanceof Animal); // true true

const max = Dog.create("Max"); // logs "Creating a dog"
console.log(max instanceof Dog); // true
console.log(max.speak()); // Max makes a sound... Woof! (Unknown)
