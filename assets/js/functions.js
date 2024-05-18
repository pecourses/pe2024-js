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
// function sayHello(user, surname) {
//   return `Hello ${user} ${surname}!`;
// }

// const helloString = sayHello("Test", "Testovych"); // "Hello Test Testovych"
// console.log("helloString :>> ", helloString);
// document.write(`<p>${helloString}</p>`);

// Прописати функцію, яка повертає суму двох чисел
// function sum(a, b) {
//   return a + b;
// }

// function inputSummand(summandNumber) {
//   let summand;

//   do {
//     summand = prompt(`Enter ${summandNumber} number`);
//   } while (!Number.isFinite(+summand) || summand === "");

//   return Number(summand);
// }

// const firstSummand = inputSummand(1);
// const secondSummand = inputSummand(2);

// const result = sum(firstSummand, secondSummand);
// console.log(result);

// Написати функцію isAdult для визначення чи повнолітній, чи ні (=> false/true)

// function isAdult(age) {
//   return age >= 18;
// }

// const age = 18;
// console.log(isAdult(age));

// згенерувати розмітку для 3х новин (заголовок, тіло, дата)
// вивести попередження, якщо новини переглядає неповнолітній
// для сьогонішніх новин (підсвітити червоним заголок, New!)

const age = 18;

// Змінні для заголовка новини
const newsTitle1 = "Lorem ipsum dolor sit amet";
const newsTitle2 = "Consectetur adipiscing elit";
const newsTitle3 = "Sed do eiusmod tempor";

// Змінні для тіла новини
const newsBody1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const newsBody2 =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const newsBody3 =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Змінні для дати новини
const newsDate1 = new Date("2024-05-18");
const newsDate2 = new Date("2024-05-17");
const newsDate3 = new Date("2024-05-16");

function news(newsTitle, newsBody, newsDate) {
  const nowSpan =
    newsDate.toLocaleDateString() === new Date().toLocaleDateString()
      ? " <span class='todayNews'>New!</span>"
      : "";

  return ` 
      <article>
        <h3>${newsTitle}${nowSpan}</h3>
        <p>${newsBody}</p>
        <p>${newsDate.toDateString()}</p>
      </article>`;
}

if (age < 18) {
  document.write("Контент може містити ...");
}

document.write(
  news(newsTitle1, newsBody1, newsDate1),
  news(newsTitle2, newsBody2, newsDate2),
  news(newsTitle3, newsBody3, newsDate3)
);
