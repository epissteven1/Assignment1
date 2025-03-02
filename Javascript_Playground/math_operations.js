
let item1 = 10.99;
let item2 = 5.49;
let item3 = 3.75;

// Task 1: Calculate the Total Cost of Items
let totalCost = item1 + item2 + item3;

// Task 2: Calculate the Average of Three Nnumbers
let totalAverage = (item1 + item2 + item3) / 3;

console.log("Total Cost: $" + totalCost.toFixed(2));
console.log("The average is:" + totalAverage.toFixed(2))

// Task 3: Odd or Even Checker
let number = 15;
if (number % 2 === 0) {
    console.log(number + " is even number");
} else {
    console.log(number + " is odd number");
}

// Task 4 : Calculate Discounts
let price = 40;
let discountPercentage = 20;
let discountAmount = (price * discountPercentage) / 100;
let discountedPrice = price - discountAmount;

console.log("The discounted price is: $" + discountedPrice);

// Bonus Task (Optional): Reverse Percentage Calculation 

let finalPrice = 80;
let discount = 20;
let originalPrice = finalPrice / (1 - discount / 100);

console.log("The original price before discount was: $" + originalPrice);
