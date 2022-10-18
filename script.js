/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javasrciptIsFun = "YES!";
console.log(typeof javasrciptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Angve";
console.log(lastName);
*/

/*
const now = 2037;
const ageDmitriy = now - 1991;
const ageSarah = now - 2018;
console.log(ageDmitriy, ageSarah);

console.log(ageDmitriy * 2, ageDmitriy / 10, 2 ** 3);

const firstName = "Dmitriy";
const lastName = "Angve";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1 (101 - 1)
x--; // 100 - 1
console.log(x);

// Compatison operators
console.log(ageDmitriy > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // greater or equal

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

const now = 2037;
const ageDmitriy = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); // left to right

let x, y;
x = y = 25 - 10 - 5; // assignment only 2 precedece but substraction has a 12 precedece (x = y = 10) - right to left
console.log(x, y);

const averageAge = (ageDmitriy + ageSarah) / 2;
console.log(ageDmitriy, ageSarah, averageAge);

// Coiding challenge
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMImark > BMIjohn;
// console.log(BMImark, BMIjohn, markHigherBMI);

const firstName = "Dmitriy";
const job = "student";
const birthYear = 1988;
const year = 2037;

const dmitriy = "I'm" + firstName + ", a " + (year - birthYear);
