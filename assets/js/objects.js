// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsDate1 = new Date("2024-05-18");

// // Об'єкти

// const obj1 = new Object();
// const obj2 = Object();
// const obj3 = {}; // синтаксичний цукор

// // ім'я властивості - string, symbol
// const news = {
//   // prop:value,
//   newsTitle: 23,
//   newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   newsDate: new Date("2024-05-18"),
// };

// console.log("news :>> ", news);
// // alert(news);

// // читання R
// console.log(news.newsTitle); // операція звернення до властивості

// // зміна U
// news.newsDate = new Date("2024-05-19");

// // додавання C
// news.author = "Test Testovych";

// // видалити D
// delete news.newsDate;
// console.log(news);

// // Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// // Переглянути об'єкт
// // змінити колір
// // видалити властивість рік випуску
// // додати властивість ім'я/прізвище власника
// // Переглянути об'єкт

// const car = {
//   brand: "Dodge",
//   model: "Charger",
//   year: 1970,
//   color: "black",
//   owner: {
//     firstName: "Test",
//     lastName: "Testovych",
//   },
// };

// console.log(car);
// car.model = "Challenger";
// car.author = "Carl Cameron";
// delete car.year;
// console.log(car);

// document.write(`<h2>${car.brand}, ${car.model}</h2>`);
// document.write(`<p>${car.owner.firstName} ${car.owner.lastName}</p>`);

// // Скопіювати машину (2 способи):
// const carCopy1 = Object.assign({}, car);
// console.log("carCopy1 === car:", carCopy1 === car);

// const carCopy2 = { ...car };
// console.log("carCopy2 === car:", carCopy2 === car);

// // Копіювання об'єктів (некоректне)

// // змінні-зачення
// const a = 1;
// let b = a;
// console.log("b :>> ", b);

// console.log(a === b);
// b = 100;
// console.log(a, b);

// // змінні посилання
// const newsCopy = news;
// console.log("newsCopy :>> ", newsCopy);

// newsCopy.author = "new Test";

// console.log("newsCopy :>> ", newsCopy);
// console.log("news :>> ", news);

// // Копіювання об'єктів (коректне)
// const correctNewsCopy1 = Object.assign({}, news);
// console.log("correctNewsCopy1 === news :>> ", correctNewsCopy1 === news);

// const correctNewsCopy2 = { ...news };
// console.log("correctNewsCopy2 === news :>> ", correctNewsCopy2 === news);

// Методи

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

const user = {
  firstName: "Test",
  lastName: "Testovych",
  passw: "qwerty",
  age: 23,
  //   getFullName: function () {
  //     return `${user.firstName} ${user.lastName}`;
  //   },
  getFullName() {
    // console.log("this :>> ", this); -- контекст
    return `${this.firstName} ${this.lastName}`;
  },
  //   getFullName: getFullName,
  changePassw(newPassw) {
    this.passw = newPassw;
  },
};

// const user1 = {
//   firstName: "Test1",
//   lastName: "Testovych1",
//   passw: "qwerty1",
//   getFullName,
// };

console.log(user.getFullName());
// console.log(user1.getFullName());
user.changePassw(prompt("new password"));
console.log("user :>> ", user);

document.write(`<h2>${user.getFullName()}</h2>`);
