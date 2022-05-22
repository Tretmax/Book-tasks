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

let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    let result = arr.slice(). sort ()
    return result
}


let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)