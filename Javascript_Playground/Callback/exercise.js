
// Exercise 1: Writing Your First Callback Function

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}
function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}




console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(4, 2, multiply));// Output: 8
console.log(calculate(10, 2, subtraction)); // Output: 8
console.log(calculate(10, 2, division)); // Output: 5


// // Exercise 2: Using Callbacks with setTimeout
function delayedMessage(message, delay, beforeDelayCallback, afterDelayCallback) {
    beforeDelayCallback();
    setTimeout(() => {
        afterDelayCallback(message);
    }, delay);
}

delayedMessage(
    "Hello, world!",
    2000,
    function () {
        console.log("Delay is starting...");
    },
    function (msg) {
        console.log(msg);
    }
);

// Exercise 3: Looping with Callbacksr
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break;
        }
    }
}

repeatTask(3, function (index) {
    console.log("Iteration:", index);
    if (index === 1) {
        return false;
    }
});