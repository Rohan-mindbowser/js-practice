class Animal {
  name;
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks !`);
  }
}

class Dog extends Animal {
  constructor() {
    super("dog");
  }
  speak() {
    this.bark();
  }
}

new Dog().speak();
