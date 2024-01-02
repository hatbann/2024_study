/** @format */
const addBirth = (PersonRef) =>
  class extends PersonRef {
    constructor(...args) {
      super(...args);
      this.birth = new Date().toString();
    }

    setBirth(birth) {
      this.birth = birth;
    }
  };

@addBirth
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p = new Person("Hyebin", "Cho");
p.setBirth(new Date("1999-05-07").toString());
console.log(p);
/* Person {
  firstName: 'Hyebin',
  lastName: 'Cho',
  birth: 'Fri May 07 1999 09:00:00 GMT+0900 (Korean Standard Time)'
} */
