// // const usersList = {
// //   1: { id: 1, name: 'Test' },
// //   2: { id: 2, name: 'Ivo' },
// // };

// // Масив - колекція впорядкованих елементів

// const arr = new Array(1, 2, 3);
// console.log("arr :>> ", arr);

// const arr2 = [4, 5, 6]; // синт. цукор
// console.log("arr2 :>> ", arr2);

// const users = [
//   { id: 1, name: "Test", age: 20 },
//   { id: 2, name: "Ivo", age: 23 },
// ];

// console.log(users[0]); // доступ до елемента під номером i
// console.log(users.length); // довжина масиву - кількість його елементів

// // Допускається зберігати різни типи даних
// const fantasticElems = [1, "qwerty", { name: "User1" }];

// // Задати масив, в якому перераховано 3 перших місяці року
// const months = ["Січень", "Лютий", "Березень"];

// // Копіювання масивів
// const months1 = Array.from(months);
// const months2 = [...months];

// // Перебір масиву циклом

// for (let i = 0; i < months.length; i++) {
//   console.log(months[i]);
// }

// // Вивести всіх користувачів
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// // Додати розмітку для кожного користувача
// for (let i = 0; i < users.length; i++) {
//   document.write(`
//     <article>
//       <h2>${users[i].name}</h2>
//       <p>Age: ${users[i].age}</p>
//     </article>
//   `);
// }

// // Вивести місяці списком
// document.write(`<ol>`);
// for (let i = 0; i < months.length; i++) {
//   document.write(`
//     <li>${months[i]}</li>
//   `);
// }
// document.write(`</ol>`);

// // Написати функцію для обчислення суми елеменів масиву [11,40,-8,20,55]

// const numbers = [11, 40, -8, 20, 55];

// function arraySum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     // console.log("i :>> ", i);
//     // console.log("arr[i] :>> ", arr[i]);
//     sum += arr[i]; // sum = sum + arr[i]
//   }

//   return sum;
// }

// console.log(arraySum(numbers)); // 118

// // Знайти середній вік користувачів
// const users = [
//   { id: 1, name: "Test", age: 20 },
//   { id: 2, name: "Ivo", age: 23 },
// ];

// function averageAge(mas) {
//   let sum = 0;

//   for (let i = 0; i < mas.length; i++) {
//     sum += mas[i].age;
//   }

//   return sum / mas.length;
// }

// console.log(averageAge(users));

// // Перебір масивів for..in, for..of

// const numbers = [1, 3, 4, 6, 8];

// // перебір по ключах (індексах)
// for (const index in numbers) {
//   console.log(index, ">>", numbers[index]);
// }

// // перебір елементів
// for (const element of numbers) {
//   console.log(element);
// }

// // перебрати (*згенерувати розмітку) month за допомогою for..of
// const months = ["Січень", "Лютий", "Березень"];

// document.write("<ol>");
// for (const value of months) {
//   document.write(`<li>${value}</li>`);
// }
// document.write("</ol>");

// // Методи масивів

// // pop, push, shift, unshift

// const months = ["Січень", "Лютий", "Березень"];
// console.log(months);

// // months[months.length] = "Квітень";
// months.push("Квітень");
// console.log(months);

// // Task: Ввести кількість елементів масиву і динамічно заповнити масив

// const numElements = +prompt("Введіть кількість елементів масиву:");
// const inputArr = [];

// for (let i = 0; i < numElements; i++) {
//   const carName = prompt(`Введіть назву машини ${i + 1}:`);
//   inputArr.push(carName);
// }

// console.log("Заповнений масив назв машин:", inputArr);

// const lastEl = inputArr.pop();
// console.log(lastEl);
// console.log(inputArr);

// // shift, unshift - вимагають більше ресурсів - старатися не використовувати

// // Копіювання (частин) масивів

// const months = ["Січень", "Лютий", "Березень"];
// const monthsCopy = months.slice(); // копія всього масиву

// // const monthPart = months.slice(1, 2); // останній не копіюється
// const monthsPart = months.slice(0, 2);
// console.log(monthsPart);

// // Видалення елементів
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // 0, 1 // 11

// // мутує масив
// // const deletedMonth = months.splice(0, 2);
// // const deletedMonth1 = months.splice(9);

// // Конкатенація масивів
// const a = [1, 2, 3, 4];
// const b = [7, 8, 9];

// const c = a.concat(b);
// const deletedMonth2 = months.splice(11).concat(months.splice(0, 2));

// const d = [...a, ...b];
// const deletedMonth3 = [...months.splice(11), ...months.splice(0, 2)];

// // Практика

// // Отримати єдиний масив повідомлень. Видалити повідомлення з id 2

// function findIndexById(array, id) {
//   for (const index in array) {
//     if (array[index].id === id) {
//       return index;
//     }
//   }
// }

// let messages = [
//   {
//     id: 1,
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     createdAt: "2024-05-01",
//   },
//   {
//     id: 2,
//     body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     createdAt: "2024-05-02",
//   },
//   {
//     id: 3,
//     body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     createdAt: "2024-05-03",
//   },
//   {
//     id: 4,
//     body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     createdAt: "2024-05-04",
//   },
//   {
//     id: 5,
//     body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
//     createdAt: "2024-05-05",
//   },
//   {
//     id: 6,
//     body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
//     createdAt: "2024-05-06",
//   },
// ];

// const newMessages = [
//   {
//     id: 7,
//     body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
//     createdAt: "2024-05-07",
//   },
//   {
//     id: 8,
//     body: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
//     createdAt: "2024-05-08",
//   },
//   {
//     id: 9,
//     body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
//     createdAt: "2024-05-09",
//   },
// ];

// // spread op
// messages = [...messages, ...newMessages];
// console.table(messages);

// // знайти індект елемента, що видаляється
// const deletedMessagIndex = findIndexById(messages, 2);

// // видалити елемент починаючи з знайденого індекса в кількості 1
// messages.splice(deletedMessagIndex, 1);
// console.table(messages);

// Методи перебору масивів ------------------------------------------

// Поняття колбеку
// Колбек - це функція, яка передається до іншої функції
//          і виконується в ній

// function functionWithCallback(cb, value) {
//   cb(value);
// }

// functionWithCallback(alert, "Hello");
// functionWithCallback(console.log, "Hello with console log");

// forEach - виконує коллбек послідовно для всіх елементів масиву
// const arr = [1, 2, 3, 4];

// function printElement(currentValue, index, array) {
//   console.log("currentValue :>> ", currentValue);
//   // console.log("index :>> ", index);
//   // console.log("array :>> ", array);
// }

// // const printElement = currentValue =>
// //   console.log("currentValue :>> ", currentValue);

// arr.forEach(printElement);

// // Array.prototype.forEach(cb){
// //   for (let i=0;i<this.length, i++) {
// //     cb(this[i], i, this)
// //   }
// // }

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Додати в розмітку за допомогою forEach <li>month[i]</li>
// function addHtml(month) {
//   document.write(`<li>${month}</li>`);
// }

// document.write("<ul>");
// months.forEach(addHtml);
// document.write("</ul>");

// let toPrint = `<ul>`;
// function addMonths(value) {
//   toPrint += `<li>${value}</li>`;
// }
// months.forEach(addMonths);
// toPrint += `</ul>`;
// document.write(toPrint);

// map => новий масив з елементами, які повертаються з колбеку для кожного елемента вихідного масиву
// const arr = [1, -2, 3, 4];

// // Кожен ел масиву піднести до квадрату

// // function toSqr(currentValue, index, array) {
// //   return currentValue ** 2;
// // }

// // const arr2 = arr.map(toSqr);
// const arr2 = arr.map(a => a ** 2);
// console.log(arr2);

// // Task: отримати елементи з вихідного, змінивши знаки елементам
// // function changeMathSign(num) {
// //   return -num;
// // }

// const numbers = [1, -2, 3, -4, 5];

// // const newNums = numbers.map(changeMathSign);
// const newNums = numbers.map(num => -num);
// console.log(newNums);

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// function generateList(m) {
//   return `<li>${m}</li>`;
// }

// const months1 = months.map(generateList);
// //  [
// //   `<li>"January"</li>`,
// //   `<li>"February"</li>`,
// //   `<li>"March"</li>`,
// // ];

// document.write(`
//   <ol>
//     ${months.map(generateList).join("")}
//   </ol>
// `);

// // Task: отримати масив з іменами користувачів
// const users = [
//   { id: 1, name: "Test", age: 15 },
//   { id: 2, name: "Ivo", age: 30 },
// ]; // ['Test', 'Ivo']

// function getName(el) {
//   return el.name;
// }

// const name = users.map(getName);
// // або
// const userNames = users.map(u => u.name);

// filter => новий масив з елеметами, які задовольняють умові в колбеку

// отримати масив з непарними елементами
// const numbers = [0, -8, 6, -10, 5, 11]; // [5, 11]

// function isOdd(n) {
//   return n % 2; // n % 2 === 1 ||  n % 2 === -1 //  n % 2 !== 0
// }

// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// Task: отримати масив повнолітніх користувачів

// const users = [
//   { id: 1, name: "Test", age: 15 },
//   { id: 2, name: "Ivo", age: 30 },
// ];

// function isAdult(u) {
//   return u.age >= 18;
// }

// const adultUsers = users.filter(isAdult);
// console.log("adultUsers", adultUsers);

// const adultUsers = users.filter(user => user.age >= 18);

// findIndex => індекс знайденого елемента (для якого з колбека повертається true,
//              або -1, якщо його не знайдено (для кожного повернулося false))

const numbers = [0, -8, 6, -10, 8, 11]; // 6 => 2

function isSix(n) {
  return n === 6;
}

const foundIndex = numbers.findIndex(isSix);

console.log(foundIndex);

// У користувача з id 1 ДН 16 років

const users = [
  { id: 1, name: "Test", age: 15 },
  { id: 2, name: "Ivo", age: 30 },
];

// знайти індекс

function findUserById(u) {
  return u.id === 1;
}

const foundUserIndex = users.findIndex(findUserById);

// змінити дані про користувача
if (foundUserIndex !== -1) {
  // users[foundUserIndex].age = 16;

  const updatedData = { age: 16 };
  users[foundUserIndex] = { ...users[foundUserIndex], ...updatedData };
}
