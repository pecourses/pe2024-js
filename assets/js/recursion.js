// Зводимо задачу до більш простої аналогічної
// 3! = 3 * 2 * 1 = 3 * 2! = 3 * 2 * 1! = 3 * 2 * 1 * 0! = 3 * 2 +* 1 * 1
// Найпростіший випадок нам відомий - це і буде умова закінчення
// 0! = 1

// n! = n * (n-1)!

// !!! Обов'язково треба передбачити умову закінчення рекурсії

function fact(n) {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}

const f = fact(50);

// Вивести в консоль для bracketSeq(2) => (())
//                       bracketSeq(4) => (((())))
// (((()))) => ( (( () ))  )
// bracketSeq(4) => ( bracketSeq(3) )

function bracketSeq(n) {
  if (n === 1) {
    return "()";
  }
  return "(" + bracketSeq(n - 1) + ")";
}
console.log(bracketSeq(2));
console.log(bracketSeq(4));
