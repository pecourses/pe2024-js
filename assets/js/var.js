// var

// + є Local Scope
// - нема Block Scope
// - дозволяється підняття змінних (hoisting) - використання до оголошення

// Приклади:

a = 5; // нема помилки - hoisting (для let/const нема hoisting)

var a = 10; // hoisting

// Змінні, оголошені в функції:
function f() {
  var a = 100; // локальні працюють звично (Local Scope), як і let/const
}

f();
console.log("a after:>> ", a); // => 10

// Змінні, оголошені в блоці
if (true) {
  var a = 100; // сприймається як глобально оголошена a (не як Block Scope), а let/const - в Block Scope
}

console.log("a after:>> ", a); // => 100
