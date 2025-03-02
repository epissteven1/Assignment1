// Task 1: Grading System


let score = 85;

let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(`The grade is: ${grade}`);

// Task 2: Weather Advisor
let temperature = 25;

switch (true) {
    case (temperature < 0):
        console.log("It's freezing outside! Bundle up!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold outside. Wear a jacket.");
        break;
    case (temperature >= 16 && temperature <= 30):
        console.log("The weather is nice. Enjoy your day!");
        break;
    case (temperature > 30):
        console.log("It's hot outside. Stay hydrated!");
        break;
    default:
        console.log("Temperature is out of range.");
}

// Task 3: Eligibility Checker
let age = 16;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else if (age >= 18) {
    console.log("You are eligible for this activity.");
}

// Task 4: Ticket Price Calculator

// "age" is in the task 3
let isMember = false;

let ticketPrice = (age < 12) ? 0 : (age >= 12 && isMember) ? 10 : 15;

console.log(`The ticket price is: $${ticketPrice}`);

// Task 5: Challenge Task (Optional): Leap Year Checker
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? true : false;
}


console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
console.log(isLeapYear(2023)); 
