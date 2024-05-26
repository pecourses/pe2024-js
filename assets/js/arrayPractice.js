function Phone(id, brand, model, makeYear, color, isNfc, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfc = isNfc;
  this.price = price;
}

const phones = [];
const PHONES_COUNT = 10;

for (let i = 0; i < PHONES_COUNT; i++) {
  const phone = new Phone(
    i + 1,
    Math.random() > 0.5 ? "Samsung" : "IPhone",
    `Series ${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 10),
    Math.random() > 0.5 ? "white" : "black",
    Math.random() > 0.5,
    5000 + Math.trunc(Math.random() * 7000)
  );

  phones.push(phone);
}

console.table(phones);

// forEach виконує колбек послідовно для всіх елементів масиву
// filter => новий масив з елеметами, які задовольняють умові в колбеку
// map => новий масив з елементами, які повернуті з колбеку для кожного елемента вихідного масиву
// findIndex => індекс знайденого елемента (для якого з колбека повертається true,
//              або -1, якщо його не знайдено (для кожного повернулося false))
// every => true (виконується всім) / false
// some => true (виконується хоча б для одного) / false

// Phone: id, brand, model, makeYear, color, isNfc, price

// 1 Відібрати телефони дорожче 8000

function isGreater8000(p) {
  return p.price > 8000;
}

const somePhones = phones.filter(isGreater8000);
// console.table(somePhones);

const somePhones1 = phones.filter(phone => phone.price > 8000);
// console.table(somePhones1);

// 2 Відібрати телефони 2018 року випуску
const phones2018 = phones.filter(phone => phone.makeYear === 2018);
// console.table(phones2018);

// 3 Вивести 'brand: model year' кожного телефону
phones.forEach(phone => {
  document.write(`${phone.brand}: ${phone.model} ${phone.makeYear} <br><br>`);
});

// 4 Видалати телефон з id 10 (filter / findIndex + splice)
const updatedPhones = phones.filter(phone => phone.id !== 10);
console.table(updatedPhones);

// 5 Отримати масив з телефонами, ціна яких нижча на 5% від початкової
const discountedPhones = phones.map(phone => ({
  ...phone,
  price: phone.price * 0.95,
}));
console.table(discountedPhones);

// const discountedPhones = phones.map(phone => {
//   phone.price *= 0.95; // не можна
//   return phone;
// });
// console.table(discountedPhones);

// 6 Вивести бренд+модель телефонів із nfc.

// const nfcPhones = phones.filter(p => p.isNfc);
// nfcPhones.forEach(p => console.log(`${p.brand} ${p.model}`));

// phones.filter(p => p.isNfc).forEach(p => console.log(`${p.brand} ${p.model}`));

// 7 Вивести дані про моделі apple 2016 року
const applePhonesSince2016 = phones
  .filter(phone => phone.brand === "IPhone" && phone.makeYear >= 2016)
  .forEach(p => console.log(p));

// *8 Перевірити, чи є золоті телефони
const isGoldPhone = phones.some(phone => phone.color === "gold");

// *9 Перевірити, чи всі телефони пізніше 2013 випуску
const areAllYounger2013 = phones.every(phone => phone.makeYear > 2013);

// *10 Дізнатися, чи всі білі айфони мають нфc
const areAllWhiteIphonesWithNfc = phones
  .filter(phone => phone.brand === "IPhone" && phone.color === "white")
  .every(phone => phone.isNfc);
