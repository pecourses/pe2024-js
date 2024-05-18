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
