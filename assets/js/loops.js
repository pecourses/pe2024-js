// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");

// while (умова входу в цикл) { цикл з передумовою
//   тіло циклу
// }

// змінна цикла
// 1 прохід циклу - ітерація

// let currentStep = 1;
// const STEPS_COUNT = 4;

// while (currentStep <= STEPS_COUNT) {
//   // console.log(currentStep);
//   console.log("Пройти прямо ");
//   console.log("Повернути на 90 град наліво");
//   currentStep++; //currentStep = currentStep + 1;
// }
// console.log("Next line");

// Вивести номери сторінок з 10 до 20

// let startPage = 10;
// const END_PAGE = 20;

// while (startPage <= END_PAGE) {
//   console.log(startPage++);
//   // startPage++;
// }

// Вивести тільки парні номери сторінок
//  10-20: 10, 12, 14, ...
// let currentPage = 10;
// const END_PAGE = 20;

// while (currentPage <= END_PAGE) {
//   console.log("Current page: ", currentPage);
//   currentPage += 2;
// }

// ВВести початкову і кінцеву сторінку і вивести парні номери
// let currentPage = Number(prompt("Input start page"));
// const endPage = Number(prompt("Input end page"));

// while (currentPage <= endPage) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage += 1;
// }

// ВВести число і, якщо воно коректне, вивести число в квадраті

// 1 ввести число
// 2 перевірити, чи воно скінченне
// 3 якщо нескінченне, то ввести заново - > step 2
// 4 якщо скінченне, то піднести до квадрату

// let inputNumber = Number(prompt("Input number"));

// // isFinite - false, if Infinity, NaN
// while (!Number.isFinite(inputNumber)) {
//   inputNumber = Number(prompt("Input number"));
// }

// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let inputNumber = Number(prompt("Input number"));
// якщо є break або continue - спробувати переписати без них
// while (true) {
//   if (Number.isFinite(inputNumber)) {
//     console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);
//     break;
//   } else {
//     inputNumber = Number(prompt("Input number"));
//   }
// }

// do..while

// do {
//   // тіло циклу
// } while (умова); // цикл з післяумовою

// let inputNumber = null;

// do {
//   inputNumber = Number(prompt("Input number"));
// } while (!Number.isFinite(inputNumber));

// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// Вивести числа з 50 до 40 do..while

// let currentPage = 50;
// const END_PAGE = 40;

// do {
//   console.log(`Current page ${currentPage}`);
//   currentPage--;
// } while (END_PAGE <= currentPage);

// Користувач має 3 спроби ввести пароль
// Якщо пароль вірний, то вивести "Пароль вірний"
// Інакше "Пароль невірний"

// const RIGHT_PASSWORD = "qwerty";
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;

// let currentTry = 1;

// do {
//   let inputPassword = prompt("Input password");

//   if (inputPassword === RIGHT_PASSWORD) {
//     console.log("Password is correct");
//     isPasswordCorrect = true;
//     break;
//   }
// } while (++currentTry <= TRY_LIMIT);

// if (!isPasswordCorrect) {
//   console.log("Password is wrong");
// }

const RIGHT_PASSWORD = "qwerty";
const TRY_LIMIT = 3;
let isPasswordCorrect = false;
let currentTry = 1;

do {
  isPasswordCorrect = prompt("Input password") === RIGHT_PASSWORD;
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

console.log(`Password is ${isPasswordCorrect ? "correct" : "wrong"}`);

//
