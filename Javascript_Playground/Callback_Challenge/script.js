// // Tasks/Challenges

// 1. Custom Map Function

/**
 * Custom implementation of the map function.
 * array - The array to map.
 * callback - The function to execute on each element in the array.
 * The callback function takes three arguments:
 *   - element: The current element being processed in the array.
 *   - index: The index of the current element being processed in the array.
 *   - array: The array customMap was called upon.
 * Returns a new array with each element being the result of the callback function.
 */
function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Example usage of customMap
let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) { return num * 2; });
console.log(doubled); // Should output: [2, 4, 6]

// 2. Filter Function
/**
 * Custom implementation of the filter function.
 * array - The array to filter.
 * callback - The function to test each element of the array.
 * The callback function takes three arguments:
 *   - element: The current element being processed in the array.
 *   - index: The index of the current element being processed in the array.
 *   - array: The array customFilter was called upon.
 * Returns a new array with all elements that pass the test implemented by the provided function.
 */
function customFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Example usage of customFilter
let result = customFilter([1, 2, 3, 4, 15], function (val) { return val < 10; });
console.log(result); // Should output: [1, 2, 3, 4]



// 3. Some Function
/**
 * Custom implementation of the some function.
 * array - The array to test.
 * callback - The function to test each element of the array.
 * The callback function takes three arguments:
 *   - element: The current element being processed in the array.
 *   - index: The index of the current element being processed in the array.
 *   - array: The array customSome was called upon.
 * Returns true if the callback function returns a truthy value for any array element; otherwise, false.
 */
function customSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

// let result = customSome([1, 2, 3, 4], function (val) { return val > 3; });
// console.log(result); // Should output: true

// 4. Every Function
/**
 * Custom implementation of the every function.
 * array - The array to test.
 * callback - The function to test each element of the array.
 * The callback function takes three arguments:
 *   - element: The current element being processed in the array.
 *   - index: The index of the current element being processed in the array.
 *   - array: The array customEvery was called upon.
 * Returns true if the callback function returns a truthy value for every array element; otherwise, false.
 */
function customEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// Example usage of customEvery
let reslt = customEvery([1, 2, 3], function (val) { return val > 0; });
console.log(reslt); // Should output: true

// 5. Reduce Function

/**
 * Custom implementation of the reduce function.
 * array - The array to reduce.
 * callback - The function to execute on each element in the array.
 * initialValue - The initial value to use as the first argument to the first call of the callback.
 * The single value that results from the reduction.
 */
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// Example usage of customReduce
let sum = customReduce([1, 2, 3], function (acc, num) { return acc + num; }, 0);
console.log(sum); // Should output: 6

// 6. Includes Check
/**
 * Checks if any element in the array satisfies the provided testing function.
  array - The array to test.
 callback - The function to test each element of the array.
 * The callback function takes three arguments:
 *   - element: The current element being processed in the array.
 *   - index: The index of the current element being processed in the array.
 *   - array: The array customIncludes was called upon.
 *  - Returns true if the callback function returns a truthy value for any array element; otherwise, false.
 */
function customIncludes(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

let re = customIncludes([1, 2, 3], function (val) { return val === 2; });
console.log(re); // Should output: true