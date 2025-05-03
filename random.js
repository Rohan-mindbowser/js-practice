const obj1 = {
  name: "rohan",
};

Object.prototype.getName = function () {
  console.log("name is", this.name);
};

obj1.getName()