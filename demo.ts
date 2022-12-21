// console.log("Hello world");

// *********************************************functions**************************************************

// const tenM = (m: number) => 10 * m;
// const tenM2 = (m: number, n: number) => (10 * m) % n;

// console.log(tenM(4));
// console.log(tenM2(4,7));

// var employe = {
//   id: 1,
//   greet: function () {
//     return console.log(this.id);
//   },
// };

// var employe = {
//     id: 1,
//     greet: function () {
//       var self = this ;
//       setTimeout(function(){
//            console.log(self.id)
//       }, 1000);
//     },
//   };

// var employe = {
//   id: 1,
//   greet: function () {
//     setTimeout(() => {
//       return console.log(this.id);
//     }, 1000);
//   },
// };

// employe.greet();

// let getValue = function (val: number) {
//   console.log(val);
// };

// default value 4
// let getValue = function (val: number = 4) {
//   console.log(val);
// };
// let getValue2 = function (val: number = 4, bonus: number = 5) {
//   console.log(val + bonus);
// };
// let getValue3 = function (val: number = 4, bonus: number = val * 5) {
//   console.log(val + bonus);
//   console.log(arguments.length);
// };

// let testFun = function (val: number = bonus, bonus: number = val * 5) {
//   // Parameter 'val' cannot reference identifier 'bonus' declared after it. (Wrong)
//   console.log(val + bonus);
//   console.log(arguments.length);
// };

// getValue();
// getValue(57);

// getValue2(20, 10);
// getValue2(undefined, 10);
// getValue3();
// getValue3(20, 10);
// getValue3(20, undefined);

// **********************Rest operator***********************************

// let displayColors = function (message: string, ...colors: any) {
//   console.log(message);
//   console.log(arguments.length);
//   console.log(colors);
//   for (let i in colors) {
//     const element = colors[i];
//     console.log(element);
//   }
// };

// let message = "List of Colors";

// displayColors(message, "Red");
// displayColors(message, "Red", "Blue");
// displayColors(message, "Red", "Blue", "Yellow");

// **********************Spread Operator***********************************

// let colorsArray: string[] = ["Orange", "Yellow", "Indigo"];

// let displayColors2 = function (message: string, ...colors: any) {
//   console.log(message);
//   console.log(arguments.length);
//   console.log(colors);
//   for (let i in colors) {
//     const element = colors[i];
//     console.log(element);
//   }
// };
// let message = "Display of Colors";

// displayColors2(message, ...colorsArray);

// **********************Object Literals ***********************************

// let firstName: string = "Santanu";
// let lastName: string = "Ghosh";

// let person = {
//   firstName: firstName,
//   lastName: lastName,
// };
// let person2 = {
//   firstName,
//   lastName,
// };

// console.log(person2.firstName);
// console.log(person2.lastName);

// let createPerson = function (firstName: string, lastName: string, age: number) {
//   let fullName = firstName + " " + lastName;
//   return {
//     firstName,
//     fullName,
//     lastName,
//     // isSenior:function(){
//     //   return age > 60;
//     // },
//     isSenior(){
//       return age > 60;
//     },
//   };
// };

// let newPerson = createPerson("Surya", "Kumar", 62);
// console.log(newPerson.firstName);
// console.log(newPerson.lastName);
// console.log(newPerson.fullName);
// console.log(newPerson.isSenior());

// let ln = "last-name";
// let person = {
//   "first-name": "Santanu",
//   [ln]: "Ghosh",
// };

// console.log(person["first-name"]);
// console.log(person["last-name"]);

// **********************Destructuring Array***********************************

// let employe: string[] = ["Santanu", "Ghosh", "Male"];
// let employe: string[] = ["Santanu", "Ghosh"];

// let [fname, lname, gender, idea] = employe;
// let [fname, ...details] = employe;
// gender = "male" default value if no value if passed or assigned
// let [fname, lname, gender = "male"] = employe;

// console.log(fname);
// console.log(lname);
// console.log(gender);
// console.log(idea);

// console.log(details);

// **********************Destructuring Object***********************************

// let employe = {
//   fname: "Santanu",
//   lname: "Ghosh",
//   gender: "Male",
// };

// let { fname, lname, gender } = employe;
// let { fname: f, lname: l, gender: g } = employe;

// console.log(fname);
// console.log(lname);
// console.log(gender);
// console.log(f);
// console.log(l);
// console.log(g);

// **********************Destructuring Object***********************************

// let user: string = "Santanu";

// let greet = `Welcome to 'single' "double" ${user} ES2015
//         This is the Second line
//               This is the Third line              so on
// `;

// console.log(greet);

// **********************For Loop***********************************

// let colors: string[] = ["Red", "Blue", "Green"];

// for (let index in colors) {
//   console.log(colors[index]);
// }
// for (let color of colors) {
//   console.log(color);
// }

// let letters: string = "ABC";

// for (let letter of letters) {
//   console.log(letter);
// }

// **********************Class***********************************

// class Person {
//   greet() {}
// }

// let p = new Person();

// console.log(p.greet === Person.prototype.greet);

// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//     console.log(this.name);
//   }
//   static staticMethod() {
//     console.log("Static Method" + this.name);
//   }
//   greetPerson() {
//     console.log("Hello" + this.name);
//   }
// }

// let p = new Person("Santanu");

// console.log(p.name);
// Person.staticMethod();
// p.greetPerson();

// class Person {
//   constructor() {
//     console.log("Person Constructor");
//   }
//   getId() {
//     return 10;
//   }
// }

// // let p = new Person();

// class Employee extends Person {
//   constructor(name: string) {
//     super();
//     console.log("Employee Constructor" + name);
//   }
//   // getId() {
//   //   return 20;
//   // }
//   getId() {
//     return super.getId();
//   }
// }

// let e = new Employee("Jhon");
// console.log(e.getId());

// **********************Set***********************************

// let mySet = Object.create(null);

// mySet.id = true;

// if (mySet.id) {
//   console.log("id exist", mySet.id);
// }

// let mySet = new Set();

// let ob1 = {};
// let ob2 = {};

// mySet.add("Hello");
// mySet.add(1);

// mySet.add(ob1);
// mySet.add(ob2);

// console.log(mySet.size);

// let newSet = new Set([1, 2, 3, 4, 4, 4, 5]); // set ignores duplicate values

// console.log(newSet.size);
// console.log(newSet.has(1));
// console.log(newSet.has(6));

// newSet.delete(1);
// console.log(newSet.size);

// let chainSet = new Set().add("Hello").add("World");

// console.log(chainSet.size);

// let mySet = new Set();

// let key = {};

// mySet.add(key);

// console.log(mySet.size);

// key = null;

// console.log(mySet.size);

// let mySet = new WeakSet();

// let key = {};

// mySet.add(key);

// console.log(mySet.has(key));

// key = null;

// **********************Maps***********************************

// let myMap = new Map();

// myMap.set("fname", "Santanu");

// myMap.set("Age", 30);

// console.log(myMap);

// console.log(myMap.get("fname"));

// let ob1 = {};
// let ob2 = {};

// myMap.set(ob1, 10);
// myMap.set(ob2, 30);

// console.log(myMap);
// console.log(myMap.get(ob1));

// myMap.delete("fname");
// myMap.clear();
// console.log(myMap.size);
// console.log(myMap.has("fname"));

// **********************For Each Loop***********************************

// var numbers: number[] = [2, 3, 4, 5];

// numbers.forEach(arrayFunction);

// function arrayFunction(element: number, index: number, array: number[]) {
//   console.log("arr[" + index + "]= " + element);
// }

// **********************Symbol***********************************

// let s = Symbol();
// let s = Symbol("First String");
// console.log(typeof s);
// console.log(s.toString());

// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1);

// console.log(s1 === s2);

// ********************************Typescript***********************************

// var a: number = 10;

// var b: string;

// Enumeration

// enum EyeColor {
//   Brown = 1,
//   Black = 5,
//   Blue = 10,
// }

// var myEyeColor = EyeColor.Brown;

// console.log(myEyeColor);

// console.log(EyeColor[myEyeColor]);

// Array

// let strArr1: string[] = ["one", "two", "three"];
// let strArr2: Array<string> = ["one", "two"];

// let anyArr: any[] = ["one", 10, true];

// Tuple

// let myTuple: [string, number] = ["hi", 10];
// console.log(myTuple[0], myTuple[1]);

// Class

// class Person {
//   public fname: string;
//   public lanme: string;
//   constractor(fname: string, lname: string) {
//     fname = this.fname;
//     lname = this.lanme;
//   }
// }

// class Person1 {
//   constructor(public fname: string, public lname: string) {}
// }

// Interface

interface Person {
  fname: string;
  lname: string;
  age?: number;
}

let person1: Person = {
  fname: "Santanu",
  lname: "Ghosh",
  age: 10,
};
let person2: Person = {
  fname: "Santanu",
  lname: "Ghosh",
};
