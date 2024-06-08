"use strict";

// Map

// Колекція по ключу, яка може як ключ містити будь-який тип

// Властивості/методи:
// size
// set(key, value) => map
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()

// Створення
const map1 = new Map();

// map1.name = 'Test'
map1.set("name", "Test");
map1.set("surname", "Testovych");

map1.set("age", 20).set("email", "qwerty@com");

// Створення
const map2 = new Map([
  ["age", 30],
  ["isMale", true],
]);

// map1.age
console.log(map1.get("age"));

// кількість елементів
console.log(map1.size);

// delete map2.isMale
map2.delete("isMale");

// age in map1
console.log(map1.has("age"));

// map1.clear();

// Перебір мапи
// keys() => MapKeyIterator
// values() => MapValueIterator
// enrties() => MapEntryIterator
// forEach()

function printMap(currentValue, key, map) {
  console.log(`map1[${key}] = ${currentValue}`);
  console.log(map);
}

map1.forEach(printMap);
map1.set("age", 21);

// Task: Створити мапу: key-tel number, value - NameSurname
// Додати 2 елемента. Перевірити, чи є в тел книзі абонент з номером +380981234567
const phoneBook = new Map();

phoneBook.set("+380960000000", "Test1").set("+380981234567", "Test2");

console.log(phoneBook.has("+380981234567"));

// for..of
for (const prop of phoneBook) {
  console.log("prop :>> ", prop);
}

// Symbol.iterator - деструктуризація, spread, Array.from(), for..of
// Масив ключів, значень, ентрізів
console.log([...phoneBook.keys()]);
console.log([...phoneBook.values()]);
console.log([...phoneBook.entries()]);

// copy
const phoneBookCopy = phoneBook; // не можна

const phoneBookCopy1 = new Map(phoneBook);
const phoneBookCopy2 = new Map([...phoneBook.entries()]);

// Task: Отримати мапу з об'єкта
const o2 = {
  ivo1: "tel1",
  ivo2: "tel2",
};
const map = new Map(Object.entries(o2));

// Example: перекладач. Словник міститься в мапі
const vocabulary = new Map();
vocabulary.set("dog", "собака");
vocabulary.set("cat", "кіт");
vocabulary.set("run", "бігти");

const engPhrase = "dog run white cat";

// function translatePhrase(engPhrase) {
// отримати масив слів
//   const engWords = engPhrase.split(" ");
//   console.log("engWords :>> ", engWords);
// перекласти кожне слово, якщо воно існує в словнику
//   const ukrWords = engWords.map(w => {
//     if (vocabulary.has(w)) {
//       return vocabulary.get(w);
//     }
//     return w;
//   });
//   console.log("ukrWords :>> ", ukrWords);
// перетворити масив укр слів на рядок
//   const ukrPhrase = ukrWords.join(" ");
//   return ukrPhrase;
// }

function translatePhrase(engPhrase) {
  return engPhrase
    .split(" ")
    .map(w => (vocabulary.has(w) ? vocabulary.get(w) : w))
    .join(" ");
}

const ukrPhrase = translatePhrase(engPhrase);

// ---------------------------------------------------------------
// Об'єкти як ключі
const user = { firstName: "Test", lastName: "Testovych" };

const usersMessages = new Map();

usersMessages.set(user, [
  { id: 1, body: "blablabla1" },
  { id: 2, body: "blablabla2" },
]);

console.log(usersMessages.get(user));

// practice
const usersWithMessages2 = [
  { id: 1, name: "Test1", message: "hello", date: new Date() },
  { id: 1, name: "Test1", message: "how are you", date: new Date() },
  { id: 2, name: "Test2", message: "hi)", date: new Date() },
  { id: 2, name: "Test2", message: "fine)", date: new Date() },
];

// отримати масив унікальних користувачів
const users = []; // [{ id: 1, name: "Test1"}, { id: 2, name: "Test2"}]

usersWithMessages2.forEach(um => {
  if (!users.find(u => u.id === um.id)) {
    users.push({ id: um.id, name: um.name });
  }
});

console.log("users :>> ", users);

// usersWithMessages2 => [
//   {message: "hello", date: new Date()},
//   {message: "how are you", date: new Date()},
//   ...
// ]

// const messages2 = usersWithMessages2.map(um => ({
//   message: um.message,
//   date: um.date,
// }));

const uToM = new Map();

users.forEach(u => {
  uToM.set(
    u,
    usersWithMessages2
      .filter(uwm => uwm.id === u.id)
      .map(uwm => ({
        message: uwm.message,
        date: uwm.date,
      }))
  );
});

console.log(uToM);
