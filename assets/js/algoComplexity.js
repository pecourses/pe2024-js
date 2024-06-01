// Складність визначають за різними параметрами:
// - за кількістю операцій
// - да пам'яттю для даних

// 100, 1000, 2000

// O(n) = 2000
// o(n) = 100
// tetta(n) = 1000

// Пошук елементів

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function serchEl(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}

console.log(serchEl(arr, 100));

// O(n) // n = arr.length
// o(1)

// Вивести табличку множення

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3

// 2 * 1 = 2
// 2 * 2 = 2
// 2 * 3 = 3

const n = 10;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// O(n^2)
