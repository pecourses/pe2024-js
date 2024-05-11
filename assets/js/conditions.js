// if - умовний оператор, розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// const isOnline = true;

// if (isOnline) {
//   document.write(`<p>User is online</p>`);
// } else {
//   document.write(`<p>User is offline</p>`);
//   console.log("new code");
// }

// Task: Задана змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

const isEnoughMoney = false;

if (isEnoughMoney) {
  document.write(`<p>Операцію схвалено</p>`);
} else {
  document.write(`<p>Операцію відхилено</p>`);
}

// const isOnline = true;

// {} - Block область видимості

// let color = null;
// let status = null;

// if (isOnline) {
//   color = "green";
//   status = "online";
// } else {
//   color = "red";
//   status = "offline";
// }

// // if (isOnline) {
// //   document.write(`<p>User is <span style="color:${color};">online</span></p>`);
// // } else {
// //   document.write(
// //     `<p>User is  <span style="color:${color};">offline</span></p>`
// //   );
// // }

// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// 3
const isOnline = true;

// умовна (тернатна) операція ?:
const color = isOnline ? "green" : "red";
const status = isOnline ? "online" : "offline";

// Єдине джерело істини, DRY
document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

//
