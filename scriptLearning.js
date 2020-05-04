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

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators (data types do not need to matah)

if (height == '23') {
    console.log('The == operator does type coercion');
    
    
}
*/

/**********************
* Functions
*/

/*
function calculateage(birthYear) {
    return 2018 - birthYear;
    
}
*/

/***********
* Function Statements and Experessions
*/

// Function declaration
/*
// function whatDoYouDo(job, firstName) {
    
} */


// Function expression

/*
var whatDoYouDO = function (job,firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:     
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('driver', 'John'));

*/

/**************
* Arrays
*/
/***

// Initialize New Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names.length);
console.log(name[2]);

// Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop (john);
john.shift();

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS as designer';
console.log(isDesigner);

*/

/******* Case Study Solution - TIP CALCULATOR
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else { 
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(200));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[0] + tips[1],
                    bills[0] + tips[2]];

console.log(tips, finalValues);

*/

// Object literal

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*************************
* Objects and methods
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
* Coding Challenge 4
*/
/*
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}

console.log(john, mark);
*/

/**********************************
* Loops and iteration
*/

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for(var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements

/*

var john = ['John', 'Smith', 1990, 'designer', false];

for(var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for(var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backward
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
            { 
                //Determin percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 50) {
                    percentage = .2;
                } else if (bill >= 50 && bill > 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }
                
                // Add resuslts to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
            { 
                //Determin percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 100) {
                    percentage = .2;
                } else if (bill >= 100 && bill > 300) {
                    percentage = .1;
                } else {
                    percentage = .25;
                }
                
                // Add resuslts to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
    }
}

function calcAverage(tips) {
    var sum = 0; 
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations

john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
} 
*/


/*********************************
* FUNCTION CONSTRUCTOR
*/

var john = {
    name: 'John',
    yearofBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearofBirth, job) {
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job =job;
}

Person.prototype.calculateAge  = function() {
        console.log(2016 - this.yearofBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


// Object.create

var person

