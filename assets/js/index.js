// JS - високорівнева, інтерпретована, скриптова, мультипарадигмова мова з динамічною (качина) типізацією

// js виконується браузером (движком)

// Стандарт ECMASctipt

// Змінні

// lowerCamelCase - для змінних/функцій/...
// UpperCamelCase - класи
// UPPER_SNAKE_CASE - константи (PI)

// 1    a-z, A-Z, _, $
// 2... a-z, A-Z, _, $, 0-9

/*
alert("Hello World 1");
alert("Hello World 2");
*/

// let, const,
// var - старий стиль
// let age = 18;
// alert(age);
// age = 19;
// alert(age);

// const count = 10;
// count = 11;
// alert(count);

// const PI = 3.14;
// userName
// user-name

// number 0 1 -10 159, 15.88, -0, -Infinity, 0.5e2, NaN - not a number
// let n1 = 9999999999999999999999999999999999999;
// alert(n1);

// bigint
// let bigNumber = 999999999999999999999999n;
// alert(bigNumber);

// string
// let userName = "Ivo";
// alert(userName);

// let phrase = "His name is 'Ivo'";
// alert(phrase);
// let someHtml = `
//   <h1 style="color: red;">Head</h1>
//   <p>Pharagraph.</p>
// `;

// document.write(someHtml);

// boolean - true, false
// let isEmail = true;
// alert(isEmail);
// стать
// let gender = "male";
// стать
// let isMale = false; // true - ч, false - ж

// Task: Створити 4 змінні:
// для свого імені, email, віку та статі.
// let name = "name007";
// let email = "male@gmail.com";
// let age = 23;
// let isMale = true;
// alert("Name: " + name); // 1 параметр
// console.log("Name:", name, "\nEmail:", email); // кілька параметрів, кома ->' '

// null
// let a = null;
// alert(a);

// undefined
// let b;
// alert(b);

// symbol

// не примітив - object

// Користувач замовив 2 од. товару по 500 грн. кожна і
// 3 од. товару по 200 грн кожна
// Скільки всього заплатив користувач

// let totalPrice = 2 * 500 + 3 * 200;
// console.log("Total:", totalPrice, "hrn");

// let amount1 = 2;
// let price1 = 500;
// let amount2 = 3;
let price2 = 200;

// let totalPrice = amount1 * price1 + amount2 * price2;
// console.log("Total:", totalPrice, "hrn");

// Task: Покупець замовив 1й товар ціною 600 зі знижкою 10%
// та 2й товар ціною 800 зі знижкою 15%
// Яка сумарна вартість покупок?
// let firstItemPrice = 600;
// let firstItemDiscount = 0.1;
// let secondItemPrice = 800;
// let secondItemDiscount = 0.15;
// let orderPrice =
//   firstItemPrice * (1 - firstItemDiscount) +
//   secondItemPrice * (1 - secondItemDiscount);
// console.log(orderPrice);

// Користувач вводе ім'я і прізвище.
// Додати в розмітку в форматі "Ім'я Прізвище" в h2

// const firstName = prompt("Input name:", "anonimus");
// const lastName = prompt("Input surname:", "noname");

// alert(firstName + " " + lastName);

// document.write("<h2>" + firstName + " " + lastName + "</h2>");

// Користувач вводе два числа
// Вивести їх суму
// const firstNumber = Number(prompt("1 number:", "0"));
// const secondNumber = +prompt("2 number:", "0");
// const sum = firstNumber + secondNumber;
// console.log("sum :>> ", sum);

// Користувач вводе кількість товару
// Вартість - 200
// Розрахувати сумарну вартість покупки
const amountOfItems = +prompt("Input amount of items:");
const itemPrice = 200;

console.log("Order price:", amountOfItems * itemPrice);
2 ** (3 ** 2); // 8**2=64 2**9=512
