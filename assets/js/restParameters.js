function sum(...argsOfSum) {
  //   console.log("arguments :>> ", arguments); // arguments - не масив
  //   console.log(argsOfSum); // залишкові параметри - масив
  let sum = 0;

  for (const el of argsOfSum) {
    sum += el;
  }

  return sum;
}

const a = sum(1, 2, 5);

function f(firstEl, ...restParams) {
  console.log(firstEl); // вказаний явно параметр не потрапить до rest-параметрів
  console.log(restParams); // сюди потрапляють всі, крім вказаних явно параметрів
}

const b = f(1, 2, 5);

// Функція приймає знак операції (+ або *)
// і накопичує суму або добуток операндів

function accum(sign, ...numbers) {
  console.log("arguments :>> ", arguments);
  if (sign === "+") {
    let sum = 0;
    for (const el of numbers) {
      sum += el;
    }
    return sum;
  } else if (sign === "*") {
    let mult = 1;
    for (const el of numbers) {
      mult *= el;
    }
    return mult;
  } else {
    return "Unknown sign";
  }
}

accum("+", 1, 2, 8); // => 11
accum("+", 1, 2, 8, 10); // => 21

accum("*", 1, 2, 8); // => 16
accum("*", 1, 2, 8, 10); // => 160
