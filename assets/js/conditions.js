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

const isOnline = false;

// {} - Block область видимості

let color = null;
if (isOnline) {
  color = "green";
} else {
  color = "red";
}

console.log(color);

if (isOnline) {
  document.write(`<p>User is <span style="color:${color};">online</span></p>`);
} else {
  document.write(
    `<p>User is  <span style="color:${color};">offline</span></p>`
  );
}
