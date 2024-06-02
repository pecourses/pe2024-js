const user = { firstName: "Test", lastName: "Testovych" };

// function renderUser(user) {
//   document.write(`
//         <article>
//           <h2>${user.firstName} ${user.lastName}</h2>
//         </article>
//       `);
// }

// function renderUser(user) {
//   //   const firstName = user.firstName;
//   //   const lastName = user.lastName;
//   const { firstName, lastName } = user;

//   document.write(`
//       <article>
//         <h2>${firstName} ${lastName}</h2>
//       </article>
//     `);
// }

// типові значення
// function renderUser({ firstName = "Anon", lastName = "Anonimous" }) {
//   document.write(`
//         <article>
//           <h2>${firstName} ${lastName}</h2>
//         </article>
//       `);
// }
// renderUser(user);

// function renderUser( firstName = '', lastName ='Anonimous') {}
// renderUser(user.firstName, user.lastName)

function renderUser({ firstName: name = "Anon", lastName = "Anonimous" }) {
  document.write(`
          <article>
            <h2>${name} ${lastName}</h2>
          </article>
        `);
}
renderUser(user);

// Особливості синтаксису:
// імена змінних мають відповідати іменам властивостей об'єкта
// після = можна вказати дефолтне значення
// після двокрапки можна вказувати нове ім'я або
//       деструктуризувати вкладений об'єкт

// Task: Оголосити змінні, використовуючи деструктуризацію
// const book = { author: "Astred Lindgren", title: "Karlson" };

// function writeBook({ author = "Undefined author", title = "Undefined title" }) {
//   document.write(`<p>${author} ${title}</p>`);
// }

// writeBook(book);

// Вкладені об'єкти

const book = {
  author: {
    firstName: "Astred",
    lastName: "Lindgren",
  },
  title: "Karlson",
};

function writeBook({ author: { firstName, lastName }, title }) {
  document.write(`<p>${firstName} ${lastName} : ${title}</p>`);
}

function writeBook(book) {
  document.write(
    `<p>${book.author.firstName} ${book.author.flastName} : ${book.title}</p>`
  );
}

writeBook(book);

const {
  author: { firstName, lastName },
  title,
} = book;

console.log("firstName :>> ", firstName);
console.log("lastName :`>> ", lastName);
console.log("title :>> ", title);

// Масиви
const arr = [1, 2, 3];

// const [firstEl, secondEl, thirdEl] = arr;
// console.log("thirdEl :>> ", thirdEl);

const [, , thirdEl] = arr;
console.log("thirdEl :>> ", thirdEl);

const user1 = {
  name: "Test",
  age: 23,
  emails: ["test1@test.com", "test2@test.com"],
  isMale: true,
};

// Task: name -> userName, age -> userAge, email1, email2, isMale
// const {
//   name: userName,
//   age: userAge,
//   emails: [email1, email2],
//   isMale,
// } = user1;

// console.log(userName, userAge, email1, email2, isMale);

const attr = { id: "btn", style: "color:blue", title: "click me" };

const { style, ...restAttr } = attr;
console.log("style :>> ", style);
console.log("restAttr :>> ", restAttr);

// витягти з user1 тільки ім'я, все інше запакувати в об'єкт
const { name: userName, ...restUser } = user1;
