// Scope / Область видимості ----------------------------------

// Змінні, оголошені поза будь-яким блоком - глобальні, видно всім блокам (Scope - Script)
// Змінні, оголошені усередині блоку, тобто в {} - локальні, видно тільки всередині блоку (Scope - Block/Local)

const globalVar = "global";

if (true) {
  const localVarIn1If = "local in 1 if";
  if (true) {
    const localVarIn2If = "local in 2 if";

    console.log("globalVar :>> ", globalVar);
    console.log("localVarIn1If :>> ", localVarIn1If);
    console.log("localVarIn2If :>> ", localVarIn2If);
  }
}

// Lexical Environment / Лексичне оточення --------------------

// Лексичне оточення - концепція, згідно з якою оточення ф-ї
// формується згідно з місцем її оголошення в коді

// const a = "global";

// function f1() {
//   const a = "local";
//   f2();
// }

// function f2() {
//   debugger;
//   console.log("a :>> ", a);
// }

// f1();

// Closure / Замикання ---------------------------------------

// Замикання - це комбінація функції та лексичного оточення, в якому ця функція була визначена.
// У Closure в Scope - локальні змінні функції, всередині якої функція, що виконується, була створена.

const a = "global";

function f1() {
  const a = "local";

  function f2() {
    console.log("a :>> ", a);
  }

  f2();
}

f1();

// 0 1 2 3 4 5 6
// Ex.: використовуючи замикання, реалізувати лічильник
function counter() {
  let count = 0;

  function inc() {
    return count++;
  }

  return inc;
}

const count1 = counter();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

const count2 = counter();
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
