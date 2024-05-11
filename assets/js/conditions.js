// if - умовний оператор, розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// const isOnline = true;

// if (isOnline) {
//   document.write(`<p>User is online</p>`);
// } else {
//   document.write(`<p>User is offline</p>`);
//   console.log("new code");
// }

// Task: Задана змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = false;

// if (isEnoughMoney) {
//   document.write(`<p>Операцію схвалено</p>`);
// } else {
//   document.write(`<p>Операцію відхилено</p>`);
// }

// const isOnline = true;

// {} - Block область видимості

// let color = null;
// let status = null;

// if (isOnline) {
//   color = "green";
//   status = "online";
// } else {
//   color = "red";
//   status = "offline";
// }

// // if (isOnline) {
// //   document.write(`<p>User is <span style="color:${color};">online</span></p>`);
// // } else {
// //   document.write(
// //     `<p>User is  <span style="color:${color};">offline</span></p>`
// //   );
// // }

// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// 3
// const isOnline = true;

// умовна (тернатна) операція ?:
// const color = isOnline ? "green" : "red";
// const status = isOnline ? "online" : "offline";

// Єдине джерело істини, DRY
// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// Оператори порівняння
// const age = 18;

// // > < >= <=

// if (age >= 18) {
//   document.write("<p>У вас є повний доступ</p>");
// } else {
//   document.write("<p>У вас обмежений доступ</p>");
// }

//
// const RIGHT_NUMBER = 2;
// const guessNumber = +prompt("Вкажіть число");

// == - нестрога рівність !!!ПОГАНО!!! (неявно приводе тип)
// === - строга рівність
// if (RIGHT_NUMBER === guessNumber) {
//   document.write("<p>Ви вгадали число</p>");
// } else {
//   document.write("<p>Ви не вгадали число</p>");
// }

// const isRightNumber = RIGHT_NUMBER === guessNumber;
// document.write(`<p>Ви ${isRightNumber ? "" : "не "}вгадали число</p>`);

// != - нестрога нерівність !!!ПОГАНО!!! (неявно приводе тип)
// !== - строга нерівність

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// інакше вивести їхню різницю

// const value1 = Number(prompt("Перше число"));
// const value2 = Number(prompt("Друге число"));
// const sumbol = prompt("Введіть символ");

// if (sumbol === "+") {
//   document.write(value1 + value2);
// } else {
//   document.write(value1 - value2);
// }

// const isAdding = sumbol === "+";
// document.write(`<p>${isAdding ? value1 + value2 : value1 - value2}</p>`);

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// Якщо введено "*", то порахувати і вивести добуток цих чисел,
// Якщо введено "-", то порахувати і вивести різницю цих чисел,
// Інакше вивести повідомлення про некоректний знак операції

// Розширена форма if

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

// const value1 = Number(prompt("Перше число"));
// const value2 = Number(prompt("Друге число"));
// const sign = prompt("Введіть символ");

// if (sign === "+") {
//   console.log(value1 + value2);
// } else if (sign === "*") {
//   console.log(value1 * value2);
// } else if (sign === "-") {
//   console.log(value1 - value2);
// } else {
//   console.log("Некоректний знак операції");
// }

// Для дефолтних випадків варто використовувати sign
// const firstNumber = +prompt("Введіть перше число");
// const secondNumber = +prompt("Введіть друге число");
// const sumbol = prompt("Введіть символ");

// const result =
//   sumbol === "+"
//     ? firstNumber + secondNumber
//     : sumbol === "-"
//     ? firstNumber - secondNumber
//     : sumbol === "*"
//     ? firstNumber * secondNumber
//     : "Некоректний знак операції!!!!";

// document.write(result);

// Вивести попередження для неповнолітніх

// if (умова) {
//     гілка true
// }

const age = 16;
if (age < 18) {
  alert("У вас обмежений доступ для послуг порталу");
}

document.write("<p>Вітаємо на порталі</p>");

const age1 = Number(prompt("Input age", "0"));

if (Number.isInteger(age1)) {
  console.log("Correct");
} else {
  console.log("Incorrect. Input again");
}

if (Number.isInteger(age1) === false) {
  console.log("Incorrect. Input again");
}
