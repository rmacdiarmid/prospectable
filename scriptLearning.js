/* var firstName = 'Ryan';
console.log(firstName);

var lastName = 'MacDiarmid';
console.log(lastName);

var age = 40;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


/*******************

var firstName = 'Ryan';
var age = 40;

//type correction
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'banker';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutatation

age = 'forty';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

/*

/**********************************
* Basic Operators
*/
/*
// Math Operators
var year, yearRyan, yearMark;
now = 2020;
ageRyan = 40;
ageMark = 39;
yearRyan = now - ageRyan;
yearMark = now - ageMark;

console.log(yearRyan);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical Operators

var ryanOlder = ageRyan > ageMark;
console.log(ryanOlder);

// typeof operator
console.log(typeof ryanOlder);

*/

/****************************************
* Operator Precedence
*/

/*
var now = 2020;
var yearRyan = 1980; 
var fullAge = 21;

//Multiple Operators

var isFullAge = now - yearRyan >= fullAge;
console.log(isFullAge); 

//Grouping

var ageJohn = now - yearRyan;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y; 
x = (3 + 5) * 4 - 6;

//More opertators
x = x + 2;
x += 2;
x = x +1;
x += 1
x++

*/

/************************
CODING CHALLENGE 1
*/

/*
var markBMI, johnBMI, markHeight, markMass, johnHeight, johnMass;

markHeight = 72;
markMass = 200;
johnHeight = 70;
johnMass = 185;

markBMI = markMass / (markHeight * markHeight); 
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var ishigherBMI
ishigherBMI = markBMI >= johnBMI

console.log('Is Marks BMI higher than Johns?' + " " + ishigherBMI);


*/

/********************
*If / else Statements
*/
/*
var firstName = 'Ryan';
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
    } 
    else {
    console.log(firstName + ' will hopefully marry soon:)');
}
*/
/********
* Boolean logic
*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else {
    console.log(firstName + ' is a man.');
}
*/

/******************
* The Ternary Operator and Switch Statements
*/

//ternary operator

/*

var firstName = 'John';
var age = 20;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
*/

//Switch statement
/*
var job = 'teacher';
switch (job) {
    case 'teacher':
            console.log(firstName + ' teaches kids how to code.');
            break;
    case 'driver':
            console.log(firstName + ' drives an uber in Lisbon');
            break;
    case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
    default:
            console.log(firstName + ' does something else.');

}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + 'John is a man')
}
    
*/

/*********************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, ' ', NaN

// truthy values: NOT falsy values

var height;

height = 0;

if (height || height ===0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}



    