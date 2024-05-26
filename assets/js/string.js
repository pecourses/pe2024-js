// рядки - псевдомасиви

const str = "I am Grut.";

console.log(str[0]);
console.log(str[5]);
console.log(str.length);

str[9] = "!"; // рядки немутабельні
// Рядки не можна змінювати !!!

// "I am Grut." => "I am Grut!"

const newStr = str.slice(0, 9) + "!";
console.log(newStr);

// "Hello, Ann!".toUpperCase();
// 'Hello, Ann!'.toLowerCase()
// 'Hello, Ann!'.startsWith('Hello')
// 'Hello, Ann!'.endsWith('Ann!')
// 'Hello, Ann!'.includes('Ann')

// Task: Написати функцію, яка за рядком ("ivo Smith") сформує рядок з ініціалами ("IS")

// function getInitials(name) {
//   const initialsArray = name.split(" "); // => ['ivo', 'Smith'];
//   const initialsString = initialsArray[0][0] + initialsArray[1][0]; // => 'iS'
//   const initialsInUpperCase = initialsString.toUpperCase(); // => 'IS'
//   return initialsInUpperCase;
// }

function getInitials(name) {
  const initialsArray = name.split(" ");
  return (initialsArray[0][0] + initialsArray[1][0]).toUpperCase();
}

console.log(getInitials("ivo Smith"));

function getInitials1(name) {
  return name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join("");
}

console.log(getInitials1("ivo Smith"));

// Замінити в рядку нецензурні вирази ('fuck') на ***
let messages = [
  {
    id: 1,
    body: "Lorem fuck dolor sit amet, fuck adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "2024-05-01",
  },
  {
    id: 2,
    body: "Ut fuck ad ass veniam, quis ass exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: "2024-05-02",
  },
  {
    id: 3,
    body: "Duis fuck irure fuck in ass in fuck velit esse cillum dolore eu fugiat nulla pariatur.",
    createdAt: "2024-05-03",
  },
];

// Для рядка
const newMes = messages[2].body.replaceAll("fuck", "***");

// Для масива повідомлень
const gentelMessages = messages.map(m => ({
  ...m,
  body: m.body.replaceAll("fuck", "***"),
}));

// Загальний випадок
const badWords = ["fuck", "ass"];

let gentelMessages = [...messages];
badWords.forEach(
  b =>
    (gentelMessages = gentelMessages.map(m => ({
      ...m,
      body: m.body.replaceAll(b, "***"),
    })))
);

console.log(gentelMessages);
