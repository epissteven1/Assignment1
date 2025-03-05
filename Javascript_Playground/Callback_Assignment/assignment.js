// Tasks/Challenges

// Task 1: Custom Array Filter

/**
 * Filters an array based on a callback function.
 *  arr - The array to filter.
 *  callback - The function to test each element of the array.
 * Should return `true` to keep the element, `false` otherwise.
 *  A new array with the elements that pass the test.
 */
function customFilter(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]


// Task 2: Countdown Timer

/**
 * Initiates a countdown from a given start value, calling a callback function at each interval.
 * start - The starting value of the countdown.
 * - The function to call at each interval with the current countdown value.
 */
function countdown(start, callback) {
    let current = start;
    const intervalId = setInterval(() => {
        callback(current);
        if (current === 0) {
            clearInterval(intervalId);
        } else {
            current--;
        }
    }, 1000);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

// Task 3: Simple Event Listener

/**
 * Creates a button element with the specified text and attaches a click event listener to it.
 *  buttonText - The text to display on the button.
  - The function to call when the button is clicked.
 */
function createButton(buttonText, callback) {
    var button = document.createElement("button");
    button.innerText = buttonText;
    button.addEventListener("click", callback);
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

// Task 4: Task Runner

/**
 * Runs an array of tasks sequentially with a delay between each task.
 *  tasks - An array of functions representing the tasks to run.
 */
function runTasks(tasks) {
    let index = 0;
    function nextTask() {
        if (index < tasks.length) {
            tasks[index]();
            index++;
            setTimeout(nextTask, 1000); // Delay of 1 second between tasks
        }
    }
    nextTask();
}

// Example tasks to run
function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

// Run the example tasks
runTasks([task1, task2, task3]);

// Task 5: Interactive Quiz Game (Extra Miles)

/**
 * Displays a question with multiple choices and checks the answer.
 *  question - The question to display.
 *  choices - An array of choices for the question.
 *  correctAnswer - The correct answer to the question.
 *  callback - The function to call with the result (true/false) of the answer check.
 */
function askQuestion(question, choices, correctAnswer, callback) {
    var questionElement = document.createElement("div");
    questionElement.innerText = question;
    document.body.appendChild(questionElement);

    choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", function () {
            var isCorrect = choice === correctAnswer;
            callback(isCorrect);
        });
        document.body.appendChild(button);
    });
}

/**
 * Checks if the answer is correct and logs the result.
 *  isCorrect - A boolean indicating if the selected answer is correct.
 */
function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

// Example usage of askQuestion function
askQuestion("What is 5 + 1?", ["12", "3", "9", "6"], "6", checkAnswer);