const obj1 = {
  name: "rohan",
};

const obj2 = { ...obj1 };

obj2.name = "sid";

console.log(obj1, obj2);
