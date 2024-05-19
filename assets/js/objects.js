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

// const user = {
//   firstName: "Test",
//   lastName: "Testovych",
//   passw: "qwerty",
//   age: 23,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changePassw(newPassw) {
//     this.passw = newPassw;
//   },
// };

// console.log(user.getFullName());

// // user.changePassw(prompt("new password"));
// console.log("user :>> ", user);

// document.write(`<h2>${user.getFullName()}</h2>`);

// Task: Написати метод для зміни кольору машини та визначення її віку
// const car = {
//   brand: "Audi",
//   model: "A4",
//   year: 2013,
//   number: "CE1234BB",
//   color: "black",
//   owner: {
//     firstName: "Test",
//     lastName: "Testovich",
//   },
//   changeColor(newColor) {
//     this.color = newColor;
//   },
//   getAge() {
//     return new Date().getFullYear() - this.year;
//   },
// };

// // car.changeColor(prompt("new color"));
// console.log(car.getAge());
// console.log(car);

// Виведення в консоль як об'єкт
// console.dir(car);
// console.dir(car.getAge);
// console.dir(new Date());

// Перебір об'єктів
// for (const key in car) {
//   console.log("key :>> ", key, car[key]);
// }
// // Обчислювальні властивості - car[key]

// const propName = "color";
// console.log("color:", car[propName]);

// Ввести для об'єкту (кішки) 3 імені властивості і значення для них

// const cat = {
//   name: prompt("Enter the cat name", "Stepan"),
//   age: prompt("Enter the cat age", "3"),
//   color: prompt("Enter the cat color", "black"),
// };

// for (const key in cat) {
//   console.log(`${key}: ${cat[key]}`);
// }

// const cat1 = {};

// for (let i = 0; i < 3; i++) {
//   let key = prompt("Enter the key");
//   let value = prompt("Enter the value");
//   cat1[key] = value;
// }

// Функція-конструктор

function User(name, surname, userAge, userEmail, isMale) {
  //   const this = {};
  this.firstName = name;
  this.lastName = surname;
  this.age = userAge;
  this.email = userEmail;
  this.isMale = isMale;
  //   this.changeEmail = function (newEmail) {
  //     this.email = newEmail;
  //   };
  //   return this;
}

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

// Статична властивість
User.typename = "User";

const user1 = new User("Test", "Testovych", 23, "mail@mail.com", true);
const user2 = new User("Wally", "Robot", 2, "wally@robot.mail", true);

user1.changeEmail("newmail@com");

console.log("user1 :>> ", user1);

// Створити функцію-конструктор для опису _____  на мінімум 3 властивості.
// Створити об'єкт за допомогою неї
function Car(brand, model, yearOfProduction, number, color) {
  this.brand = brand;
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.number = number;
  this.color = color;
}

const car1 = new Car("Audi", "RS8", 2021, 7777, "black");
car1.brand = "BMW";
car1.age = 30;
console.log(car1);

// Визнечання типу
console.log(typeof 4);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof user1);
console.log(typeof car1);
console.log(typeof new Date());

// Чи є інстансом вказаного типу об'єктів
console.log("user1 instanceof User", user1 instanceof Object); // true
console.log("user1 instanceof User", user1 instanceof User); // true
console.log("user1 instanceof User", user1 instanceof Car); // false
