// The Adapter Design Pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts like a bridge between two incompatible interfaces.

// In JavaScript, this pattern is often used when integrating third-party libraries or when refactoring legacy code to work with new implementations.

class OldUserService {
  getUser() {
    return {
      fullName: "John Doe",
      age: 30,
    };
  }
}

class UserAdapter {
  constructor(oldUserService) {
    this.oldUserService = oldUserService;
  }

  getUser() {
    const oldData = this.oldUserService.getUser();
    const [firstName, lastName] = oldData.fullName.split(" ");

    return {
      firstName,
      lastName,
      age: oldData.age,
    };
  }
}
const oldService = new OldUserService();
const adapter = new UserAdapter(oldService);

console.log(adapter.getUser());
// Output: { firstName: 'John', lastName: 'Doe', age: 30 }
