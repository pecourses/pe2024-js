// ім'я - найчастіше дієслово
// одна функція - одна дія

// 1
// function sayHello() {
//   document.write(`<p>Hello User!</p>`);
// }

// sayHello();
// 2
// function sayHello(user, surname) {
//   // параметри
//   document.write(`<p>Hello ${user} ${surname}!</p>`);
// }

// sayHello("Test", "Testovych"); // аргументи
// sayHello("Wally", "Robot"); // аргументи

// 3
function sayHello(user, surname) {
  return `Hello ${user} ${surname}!`;
}

const helloString = sayHello("Test", "Testovych"); // "Hello Test Testovych"
console.log("helloString :>> ", helloString);
document.write(`<p>${helloString}</p>`);

// Прописати функцію, яка повертає суму двох чисел
function sum(a, b) {
  return a + b;
}

function inputSummand(summandNumber) {
  let summand;

  do {
    summand = prompt(`Enter ${summandNumber} number`);
  } while (!Number.isFinite(+summand) || summand === "");

  return Number(summand);
}

const firstSummand = inputSummand(1);
const secondSummand = inputSummand(2);

const result = sum(firstSummand, secondSummand);
console.log(result);
