function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
// в прототипі - для екземплярів
User1.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// статичний метод - для функції конструктора
User1.isUser = function (obj) {
  return obj instanceof User1;
};

const user1 = new User1(
  "jack",
  "wilsher",
  23,
  true,
  "test@SpeechGrammarList.com",
  true
);

// класовий підхід
// Класи - синтаксичний цукор над вбудованими в жс
//         функціями-конструкторами і прототипами
class User {
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this._name = name;
    this._surname = surname;
    this.age = age;
    this._isMale = isMale;
    this._email = email;
    this._isSubscribed = isSubscribed;
  }
  getFullName() {
    return `${this._name} ${this._surname}`;
  }
  // геттери і сеттери можуть не співпадати з конкретною однією властивістю
  //   get fullName() {
  //     return `${this._name} ${this._surname}`;
  //   }
  // звертаємося як до властивості при заданні значення
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("age must be number");
    }
    if (!Number.isInteger(value) || value < 0 || value > 150) {
      throw new RangeError("age must be nonnegative integer");
    }
    this._age = value;
  }
  // звертаємося як до властивості при зчитуванні значення
  get age() {
    return this._age;
  }
  // статичний метод - працює для класа, а не для його екземпляра
  static isUser(obj) {
    return obj instanceof User;
  }
}
try {
  // екземпляр / інстанс

  const user2 = new User(
    "jack",
    "wilsher",
    23,
    true,
    "test@SpeechGrammarList.com",
    true
  );
  console.log(user2.getFullName());
  console.log(User.isUser(user2));
  console.log("user2 :>> ", user2.age); // age()
  user2.age = 23; // age(-23)
} catch (err) {
  console.log("err :>> ", err);
}
