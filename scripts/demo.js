"use strict";
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