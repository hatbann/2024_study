/** @format */

const toPascalCase = (target, property, descriptor) => {
  const value = descriptor.initializer();
  descriptor.initializer = () =>
    value.replace(
      /(\w)(\w*)/g,
      ($0, $1, $2) => $1.toUpperCase() + $2.toLowerCase()
    );

  return descriptor;
};

class Person {
  @toPascalCase
  firstName = "hyebin";

  @toPascalCase
  lastName = "cho";

  constructor(firstName, lastName) {
    if (firstName) {
      this.firstName = firstName;
    }

    if (lastName) {
      this.lastName = lastName;
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(new Person());
// Person { firstName: 'Hyebin', lastName: 'Cho' }
