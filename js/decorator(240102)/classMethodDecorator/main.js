/** @format */

const logger = (msg) => (target, property, descriptor) => {
  const method = descriptor.value; // value => logger를 붙인 getFullName 함수

  descriptor.value = function (...args) {
    console.log("[LOG]", msg);
    return method.apply(this, args); // this = 객체 p
  };

  return descriptor;
};

const readOnly = (target, property, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @logger("Call Person FullName")
  @readOnly // 해당 메서드를 readOnly로 만들기
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// create instance
const p = new Person("Hyebin", "Cho");
p.getFullName = 1;
console.log(p.getFullName());
// readonly가 없다면 console.log(p.getFullName); 의 결과로 1 출력
