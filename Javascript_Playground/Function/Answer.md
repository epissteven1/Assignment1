 1. Challenge 1: The Output is 10, why?  inside the function calculateSum and has the parameter arr as array is for loop and it has variable sum inside the for loop the i is equal 0 then the  measure the length of arr then increment the i by 1 then the make the  arry[i] store in the variable sum then return it. then the last part number is replace the arr then add values [1,2,3,4] then then call it by console log by function and the values of numbers.

 T-diagram function calculateSum(arr)
 Variable / Expression	  |   Value / Evaluation
arr	                      |   [1, 2, 3, 4]
sum	                      |    0 → 1 → 3 → 6 → 10 (incremented in each iteration)
i	                      |    0 → 1 → 2 → 3 → 4 (loop index)
sum += arr[i]	          |    0 + 1 = 1 → 1 + 2 = 3 → 3 + 3 = 6 → 6 + 4 = 10
calculateSum(numbers)	  |    10 (final return value)
console.log("Sum:", calculateSum(numbers)) | Sum: 10 (output in the console)

2. Challenge 2: The output are True, False, True, in this challenge it's check the boolean if its correct inside the if statement the function IsEven and has parameter in call inside the if statement. Now the modulos 2 === 0 meaning if the the num has remainder equal 0 return true else false.

T-Diagram isEven(num) function:
Variable / Expression	   |      Value / Evaluation
num (first call)	       |         4
num % 2 === 0	           |         4 % 2 === 0 → true
return true	               |         true
console.log(isEven(4))	   |         true (output)
num (second call)	       |         7
num % 2 === 0	           |         7 % 2 === 0 → false
return false	           |         false
console.log(isEven(7))	   |         false (output)
num (third call)	       |         0
num % 2 === 0	           |         0 % 2 === 0 → true
return true	               |         true
console.log(isEven(0))	   |         true (output)

3. Challenge 3: The output are Hello, Alice!, Hello, Bob!, Hel, o, Charlie! in called in greet function. In the personalizedGreeting function with parameter names has for loop inside it function it's call the array parameter names and increment. Now the parameter change to friends and has 3 value to string names now after the iteration of for loop it call the friends parameter  when the condition is meet then return it in the greet function.

T-Diagram functions:
Variable / Expression	        |      Value / Evaluation
friends                         |     	["Alice", "Bob", "Charlie"]
i (loop index)	                |        0 → 1 → 2
names[i] (each iteration)       |    	"Alice" → "Bob" → "Charlie"
greet(names[i])	                |       "Hello, Alice!" → "Hello, Bob!" → "Hello, Charlie!"
console.log(greet(names[i]))	|       Prints "Hello, Alice!" → "Hello, Bob!" → "Hello, Charlie!"

4. Challenge 4: The output are [30, 20, 10], [10, 20, 30] the originalArray and the reverseArray. a function reverseArray with parameter arr has reversed variable and has empty array. the length -1 in the for loop indicate the last part of the array start the loop reverse. Called the reversed to push arr[i] the length of the array has 3 when the condition is meet it will stop the return the reversed variable that store the reverse array.

T-Diagram  reverseArray(arr) function:

Variable / Expression	                 |    Value / Evaluation
originalArray	                         |       [10, 20, 30]
arr (function input)	                 |       [10, 20, 30]
reversed	                             |       [] → [30] → [30, 20] → [30, 20, 10]
i (loop index)	                         |       2 → 1 → 0 → stops
arr[i] (each iteration)                  |	     30 → 20 → 10
reversed.push(arr[i])	                 |       [30] → [30, 20] → [30, 20, 10]
return reversed	                         |       [30, 20, 10]
console.log(reverseArray(originalArray)) | 	     Prints [30, 20, 10]
console.log(originalArray)	             |       Prints [10, 20, 30] (unchanged)


5. Challenge 5:The output is [[2, 4], [6, 8]]. This show  how the function iterates through  the 2D array,multiples each elements by 2, and modifies the orignal matrix. Inside the The multiplyMatrix with parameter matrix has nested loop to get a 2D array. The variable i , j value will be the matrix in the multiplyMatrix. The "i" is the outer loop and the "j" is inner loop the iteration is multiples by 2 inside the matrix parameter then return the matrix.



T-Diagram multiplyMatrix(matrix) function:
Variable / Expression	               |    Value / Evaluation
matrix (initial)	                   |     [[1, 2], [3, 4]]
i (outer loop index)	               |     0 → 1
j (inner loop index)	               |     0 → 1 (for each i)
matrix[i][j] *= 2	                   |     1 * 2 = 2 → 2 * 2 = 4 → 3 * 2 = 6 → 4 * 2 = 8
matrix (modified)	                   |     [[2, 4], [6, 8]]
return matrix	                       |     [[2, 4], [6, 8]]
console.log(multiplyMatrix(matrix))	   |     Prints [[2, 4], [6, 8]]