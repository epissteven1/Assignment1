// Tasks

// 1. Multiplication Table Generator

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 2. Sum of First N Natural Numbers

let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`The sum of the first ${n} numbers is: ${sum}`);

// 3. Array Elements Printer
let array = [2, 4, 6, 8, 10];
for (let i = 0; i < array.length; i++) {
    console.log(`Array Element: ${array[i]}`);
}

// 4. Pattern Printer
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// 5. Reverse Array Elements
