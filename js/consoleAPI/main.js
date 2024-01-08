/** @format */

// console api
/* var playerOne = 120;
var playerTwo = 130;
var playerThree = 140;
var playerFour = 150;
var playerFive = 160;

console.log("Console.log" + " " + playerOne);
console.debug("Console.debug" + " " + playerTwo);
console.info("Console.info" + " " + playerFour);
console.warn("Console.warn" + " " + playerThree);
console.error("Console.error" + " " + playerFive); */

// console.group
/* console.group("로그 parent 열기");
console.log("로그 parent 입니다");

console.group("로그 child 1");
console.log("로그 child 1-1");
console.log("로그 child 1-2");
console.groupEnd();

console.group("로그 child 2");
console.log("로그 child 2-1");
console.log("로그 child 2-2");
console.groupEnd();

console.log("로그 parent 닫기");
console.groupEnd(); */

// console.groupCollapsed
/* console.group("로그 parent 열기");
console.log("로그 parent 입니다");

console.groupCollapsed("로그 child 1");
console.log("로그 child 1-1");
console.log("로그 child 1-2");
console.groupEnd();

console.groupCollapsed("로그 child 2");
console.log("로그 child 2-1");
console.log("로그 child 2-2");
console.groupEnd();

console.log("로그 parent 닫기");
console.groupEnd(); */

// console.time
/* console.time("time1");

setTimeout(() => {
  console.log("console time");
  console.timeEnd("time1");
}, 500);
 */

// console.table
/* const foods = [
  {
    icon: "🍔",
    name: "hamburger",
    price: 30.89,
    group: 1,
  },
  {
    icon: "🍨",
    name: "ice cream",
    price: 20.71,
    group: 1,
  },
  {
    icon: "🍿",
    name: "popcorn",
    price: 10.31,
    group: 2,
  },
  {
    icon: "🍵",
    name: "tea",
    price: 5.98,
    group: 2,
  },
];

console.table(foods);
 */

//console.trace
/* const foo = () => {
  bar();
};

const bar = () => {
  console.log("bar");
  console.trace();
};

foo(); */

// console.count
const bar = () => {
  console.log("bar");
  console.count("bar 호출 횟수");
};

bar();
bar();
