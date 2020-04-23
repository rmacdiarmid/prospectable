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



    