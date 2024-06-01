// console.log("before error :>> ");
// const a = 4 + b;
// console.log("after error :>> ");
// document.write("<h1>My Page</h1>");

try {
  // код, який потенційно може викликати помилки
} catch (err) {
  // блок, куди буде передане керування, якщо виникла вбудована помилка
  // або згенерувалася вручну в throw
}

// throw генерує помилку (виняткову ситуацію/исключительную ситуацию/exception)
// вона передається в catch:
// throw new Error
//          ||
//          \/
// catch  (error)
//-------------------------------------------------------------------------
// console.log("before error :>> ");

try {
  console.log("before error in try :>> ");
  const a = 4 + b; // catch(new Error()
  console.log("after error in try :>> ");
} catch (err) {
  console.error("err :>> ", err);
  document.write("<p>Sorry, servece is unavailable</p>");
}

console.log("after error :>> ");
document.write("<h1>My Page</h1>");

// throw new Error("ReferenceError: b is not defined"); - викидання (генерація) помилки

function f(n) {
  if (typeof n !== "number") {
    throw new Error("n must be a number");
  }
  return n * n;
}
console.log("f(5) :>> ", f("5"));

try {
  console.log("f(5) :>> ", f("5"));
} catch (err) {
  console.log("err :>> ", err);
}

console.log("after try :>> ");

// Умови для n: 0<=n<=manSafeInteger, number, n - integer,
function fact(n) {
  if (typeof n !== "number") {
    throw new TypeError("n must be number");
  }
  if (!Number.isInteger(n) || n < 0 || n > Number.MAX_SAFE_INTEGER) {
    throw new RangeError("n must be nonnegative integer value");
  }

  function factorial(m) {
    if (m === 0) {
      return 1;
    }
    return m * factorial(m - 1);
  }

  return factorial(n);
}

try {
  const f = fact(5);
  console.log("f :>> ", f);
} catch (e) {
  console.log("e :>> ", e);
}

document.write("<p>Text</p>");

// Task: написати функцію для валідації імені користувача (4-32, string)
// якщо значення валідне, то повернути його
// якщо ні, то згенерувати помилку

// validateName(name) => validatedName || throw error
// isValid(name) => true || false

function validateName(name) {
  name = name.trim();

  if (typeof name !== "string") {
    throw new TypeError("name must be string");
  }
  if (name.length < 4 || name.length > 32) {
    throw new RangeError("name must be 4-32 length");
  }
  return name;
}

try {
  console.log(validateName("User"));
} catch (error) {
  if (error instanceof RangeError) {
    console.log("RangeError");
  } else if (error instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Error");
  }
  console.log("error :>> ", error);
}

// Task: Реалізувати функцію, яка приймає вік,
// повертає вік, якщо параметр відповідає вимогам (???),
// інакше генерує помилку

function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  } else if (!Number.isInteger(age)) {
    throw new TypeError("Age must be an integer");
  } else if (age < 0) {
    throw new RangeError("Age must be a positive number");
  } else if (age > 150) {
    throw new RangeError("Age must be less than 150");
  }
  return age;
}

try {
  console.log(validateAge(10));
} catch (error) {
  console.log("error :>> ", error);
}
