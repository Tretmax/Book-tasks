'use strict'

// Task1
// alert ('i am JS!')

// Task2
// let admin
// let name = "John"
// admin = name
// alert ( admin)

//Task3
// let name = prompt("What is your name?")
// alert (`Your name is ${name}`)
// alert ("Your name is " +name)

//Task4
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// let с = prompt("Второе число?", 15);
// alert(+a + +b + +с); // 

//Task5
// let ofNameJS=prompt("Какое оф. название JS?", "ECMAScript")
// if (ofNameJS == "ECMAScript") {
//     alert("Verno")
// }
// else {
//     alert("Ne verno")
// }

// Task 6
// let value = prompt ("Input any number:", "")
// if(value>0) {
//     alert (1)
// }

// else if (value<0){
//     alert (-1)
// }
// else if (value==0){
//     alert (0)

// }
// else{
//     alert ("I say NUMBER!")
// }

// let value = prompt ("Input any number:", "")
// alert(
//     (value >0) ? 1 :
//     (value <0) ? -1 :
//     0
// )

// Task 7
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result = (a + b < 4) ? 'Мало' : 'Много'

// Task 8
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// Let message = (Login == 'Сотрудник') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ?  'Нет логина' : 
// "":

// Task 9

// if (age >=14 && age <=90) 
// if (age <14 || age >90) 
// if (!(age >=14 && age <=90))

// Task 10

// let userName = prompt("Login ? ", "");
// let password
// if (userName == "Admin") {
//     password = prompt("input password: ", "")
//     if (password == "Boss") {
//         alert("Welcome, Boss")
//     }
//     else if (password === null || password === "") {
//         alert("Canceled")
//     }
//     else {
//         alert("Wrong pass/ Go AWAY!")
//     }
// }

// else if (userName === null || userName === "") {
//     alert("Canceled")
// }
// else {
//     alert("I dont you know. Go Away!")
// }

// Task 11
// let a = 0
// for (a=2; a<=10; a++ ) {
//     if (a%2==0){
//         alert (a)}
//     }

// Task12
// let i =0
// while (i < 3 ) {

//     alert( `number ${i}!` );
//     ++i
//   }

// Task13

// let value = 0 

//  do{
//     value = prompt("input number more than 100" , "0")
// }
// while (value && value < 100)

// Task 14
// let n =111
// num: for (let a = 2; a <= n; ++a) {
//     for (let b = 2; b < a; ++b) {
//         if ((a % b == 0) ) {
//             continue num
//         }
//     }
//     console.log(a)
// }

// Task 15
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// if (browser === 'Edge') {
//     alert("You've got the Edge!")
// }
// else if (browser === 'Chrome' || 
// browser === 'Firefox' || 
// browser === 'Safari' || 
// browser === 'Opera') {

//     alert('Okay we support these browsers too')
// }
// else { alert('We hope that this page looks ok!') }

// Task 16
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// switch (number) {
//     case (0):
//         alert('Вы ввели число 0')
//         break
//     case (1):
//         alert('Вы ввели число 1')
//         break
//     case (2):
//     case (3):
//         alert('Вы ввели число 2, а может и 3')
//         break
// }
// Task 17
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
// return age>18 ? true : confirm('Родители разрешили?')
// return age>18 || confirm('Родители разрешили?')
// }
//   Task 18
// function min(a, b){
//     // if (a<b) {
//     //     return a;
//     //     }
//     //     return b;

// return a<b ? a : b

// }

// Task 18
// function pow(x, n) {
//     let result = 1
//     for (let i = 0; i < n; i++) {
//         result = result * x
//     }
//     return result;
// }
// let x = +prompt("input x: ", "")
// let n = +prompt("input n: ", "")
// if (n < 0) { alert("input positive mumber") }
// else { alert(pow(x, n)) }

// Task 18
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// let ask = (question, yes, no) => {
//     confirm(question) ? yes() : no()
// }
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// )

// Task 19
// let a = +prompt ('input number 1', '')
// let b = +prompt ('input number 2', '')
// alert (a+b)

// Task19
// alert( Math.round (6.35*10)/10 )

// Task 20
// function readNumber() {
//     let num
//     do {
//         num =   prompt("input NUMBER!!!", '')
//         if (num ==null || num== ""){
//             return null
//         }

//     }
//     while (!isFinite(num))
//     return num
// }

// alert(readNumber())

// Task 21
// function rand (min, max) {

//     return Math.round ((max-min) *Math.random()+ min)
// }

// console.log (rand(1, 10))
// console.log (rand(5, 10))
// console.log (rand(2, 3))
// console.log (rand(8, 9))
// console.log (rand(1, 555))

// Task22
// let str = "vasya";
// function ucFirst (){
//     let str1 = (str[0].toUpperCase() + str.slice(1, str.length ));
//     return str1
// }

// console.log (ucFirst ())

// Task 23
// let str1 = 'buy ViAgRA now';
// let str2 = 'free xxxxx';
// let str3 = "innocent rabbit";

// function antiSpam (incomingString) {
//     let workStr = incomingString.toUpperCase ();
//     return workStr.includes ("XXX")||workStr.includes("VIAGRA")
// }
// console.log (antiSpam (str1))
// console.log (antiSpam (str2))
// console.log (antiSpam (str3))

// Task 24
// let str1 = "Вот, что мне хотелось бы сказать на эту тему:"
// let str2 = "Всем привет!"
// function truncate(inStr) {

//     if (inStr.length > 20) {
//         let truncateStr = (inStr.slice(0,19) + '...')
//         return truncateStr 
//     }
//     else{
//         return inStr
//     }
// }

// console.log(truncate(str1))
// console.log(truncate(str2))

// Task 25
// function extractCurrencyValue (str) {
//     let value = str.slice(1, str.lenght);
//     return +value
// }

// alert( extractCurrencyValue('$120') === 120 )

// Task 26
// let styles = ['jazz', 'blues'];
// console.log (styles)

// styles.push ('rock-n-roll');
// console.log (styles)

// styles [ Math.floor((styles.length-1)/2)] = 'classics'
// console.log (styles)

// styles.shift ()
// console.log (styles)

// styles.unshift ('rap', 'raggeay')
// console.log (styles)

// Task 27

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this);
// });

// console.log (arr [2]())

// Task 28

// function sumInput() {
//     let sumArr = []
//     let inputNumber = 0
//     let summ = 0
//     while (inputNumber >= 0 && inputNumber != null) {
//         sumArr.push(inputNumber)
//         inputNumber = prompt("Input number", '');

//     }
// for (let i = 0; i < sumArr.length; i++)
// summ = summ + (+sumArr [i])
// return summ

// }
// console.log(sumInput())

// Task 29
// function camelize(str) {
//     let arr = str.split('')
//     arr.map(
//         function (item, index) {
//             if (item === "-") {
//                 arr.splice(index, 1)
//                 arr[index] = arr[index].toUpperCase()
//             }
//         }
//     )
//     let strOut = arr.join("")

//     return strOut
// }

// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// Task 30

// let arr = [5, 3, 8, 1];
// function filterRange (arr, a, b) {
//     let results = arr.filter (item => (item >= a && item <= b))

// return results
// }


// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// Task 31

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     arr.map ( function (item, index) {
//         if (item < a || item > b) {
//             arr.splice (index, 1)
//         }
//     }
//     )
// return arr
// }

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr); // [3, 1]

// Task 32
// let arr = [5, 2, 1, -10, 8];
// function compareNumeric(a, b) {
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if (a < b) return 1;
//   }

// arr.sort(compareNumeric )

// alert( arr ); // 8, 5, 2, 1, -10

// Task 33

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//     let result = arr.slice(). sort ()
//     return result
// }


// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// Task34
// let user ={};
// user.name = 'John'
// user.surName = 'Smith'
// user.name = 'Pete'
// delete (user.name)
// console.log (user)

// Task 35

// let schedule = {};

// function isEmpty (obj){
// for (let key in obj){

//     return false
// }
// return true;

// }
// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// Task 36
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     sfdf: 55
//   }

//   let sum = 0
//   for (let key in salaries) {
//       sum += salaries[key]
//   }
//   console.log (sum)

// Task 37
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric (obj) {
// for (let key in obj){

//     (typeof (obj[key]) === 'number') ? obj[key] = obj[key]*2 : obj[key] 
// }


// }


// multiplyNumeric(menu);
// console.log (menu)

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Task 38

// let calculator = {
//     read() {
//         this.value1 = +prompt('input value 1', '');
//         this.value2 = +prompt('input value 2', '')
//     },
//     sum() {

//         return this.value1 + this.value2
//     },
//     mul() {

//         return this.value1 * this.value2
//     },
// }
// calculator.read ();

// alert(calculator.sum())
// alert(calculator.mul())

// Task 39
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this
//     }
//   };
//   ladder.up().up().down().showStep()

// Task 40
// let calculator = new Calculator();
// calculator.read();

// function Calculator() {
//     this.read = function (){
//         this.value1 = +prompt('input value 1', '');
//         this.value2 = +prompt('input value 2', '');
//     };
//     this.sum = function () {

//         return this.value1 + this.value2
//     };
//     this.mul = function () {

//         return this.value1 * this.value2
//     };
// }


// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// Task 41
// let accumulator = new Accumulator(1); // начальное значение 1

// function Accumulator(startValue) {
//     this.value = startValue
//     this.read = function () {
//         let currentValue = +prompt('input number', '');
//         return this.value = this.value + currentValue;

//     }

// }

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// Task42


// function Calculator() {


//     this.calculate = function (str) {
//         let arr = str.split(" "),
//             a = +arr[0],
//             op = arr[1],
//             b = +arr[2]
//         return this.method[op](a, b);
//     };

//     this.method = {
//         '+': (a, b) => (a + b),
//         '-': (a, b) => (a - b),
//     };

//     this.addMethod = function (name, func) {
//         this.method[name] = (func)


//     }

// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("8 / 3");
// alert(result); // 8

// Task 43
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map (item => item.name)
// alert( names ); // Вася, Петя, Маша

// Task 44

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map( item => ({
//   fullName: item.name + ' ' + item.surname,
//   id: item.id,
// }))
// console.log(usersMapped)
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// Task 45

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];


// function sortByAge (arr) {
// arr.sort (compareNumeric )
  
// }
// function compareNumeric(a, b) {
//   if (a.age > b.age) return 1;
//   if (a.age == b.age) return 0;
//   if (a.age < b.age) return -1;
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// Task 46
// let arr = [1, 2, 3];

// function shuffle (arr){
//     arr.sort (rand )
// }
// function rand () {

//       return Math.random()-0.5
//         }


// shuffle(arr);
// // arr = [3, 2, 1]
// console.log (arr)

// shuffle(arr);
// // arr = [2, 1, 3]
// console.log (arr)

// shuffle(arr);
// // arr = [3, 1, 2]
// console.log (arr)

// Task 47

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr){
// let sumAge = 0;
// arr.forEach(item => {
// sumAge=sumAge+item.age
  
// }); 

//   return (sumAge/arr.length)
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr){
//   let summ
//   summ = arr.reduce ((sum, arr) => sum +arr.age,0 )
//   return summ/arr.length
  
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Task 48

// function unique(arr) {





// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O

// Task 49
// function unique(arr) {

//   return Array.from (new Set(arr)) 

// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O

// Task50

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean (arr){
//   let map = new Map()

//   for (let word of arr){
    
   
//     let sorted = word.toLowerCase().split("").sort().join('');
//     map.set(sorted, word)

//   console.log(map)
// }

// return Array.from (map.values())
// }

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Task 51
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries (obj){
// let result = 0
// let zp = Object.values(obj)
// for (let value of zp){
// result = result + value
// } 
// return result
// }

// alert( sumSalaries(salaries) ); // 650

// // Task 52
// let user = {
//   name: 'John',
//   age: 30
// };

// function count (obj){
//   return (Object.keys(obj).length)
// }

// alert( count(user) ); // 2

// Task 53

// let user = { 
//   name: "John", 
//   years: 30 };

// // ваш код должен быть с левой стороны:
// let {name, years:age, isAdmin=false} = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// Task 54
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function topSalary (obj){
// let max = 0
// let maxName = null

//   for (let [name, salary] of Object.entries(obj))
// if (max<salary) {
//   max=salary
//   maxName=name
// }  
// return maxName

// }

// console.log( topSalary(salaries))

// Task 55
//   let d = new Date(2012,1,20,3,12);
// alert (d)

// Task 56
// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay (date){
//   let days = ['vs','pn','vt','sr','cht','pt','sb']
//   return days[date.getDay()]
      
//   }
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
// date = new Date(2014, 0, 3); // 3 января 2014 года
// alert( getWeekDay(date) ); // ПТ

// Task 57
// let date = new Date(2015, 0, 2);

// function getDateAgo(date,days){
//   let outD= new Date(date)
//     outD.setDate (date.getDate()-days)
// return  outD

// }


// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// Task 57
// function sumTo (a){
//   let out = 0
// for(let i=1; i<= a; ++i){
//   out = out + i
// console.log(out)
// }
// return out


// let out = a
// if (a===1){
//   out=1
// }
// else{

//   out = out + sumTo(out-1)
// }
// return out
// }


// alert (sumTo(1))
// alert (sumTo(2))
// alert (sumTo(3))
// alert (sumTo(4))
// alert (sumTo(100))


// Task 58
// function printNumbers(from, to){
//   let out = from
// if (out == to){

//   alert (out)
// }
// else{
//   alert (out)
//   out=out+1
// setTimeout (printNumbers, 5000, out, to)

// }

// }

// printNumbers(5, 11)

// Task 59
// function delay(ms) {
//  return  new Promise (function (resolve , reject){
// setTimeout ( resolve ,ms)

//  })

// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));