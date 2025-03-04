1. Challenge 1:The output are 1, 12, 123 in the stairs view. This shows how the function builds a growing pattern of numbers by iterating through nested loops. in the function generatePattern has nested loop and has variable result with empty string. Inside the loop the result += "\n" indicated to jump down the number the  loop start in "i" loop continues until <=3 .
T-Diagram generatePattern() function:
Variable / Expression	               Value / Evaluation
result (initial)	                    "" (empty string)
i = 1	                                    Loop starts
j = 1 (inner loop)	                        result += "1 " → "1 "
End of inner loop	                        result += "\n" → "1 \n"
i = 2	                                    Loop continues
j = 1	                                    result += "1 " → "1 \n "
j = 2	                                    result += "2 " → "1 \n 2 "
End of inner loop	                        result += "\n" → "1 \n 2 \n"
i = 3	                                    Loop continues
j = 1	                                    result += "1 " → "1 \n 2 \n "
j = 2	                                    result += "2 " → "1 \n 2 \n 2 "
j = 3	                                    result += "3 " → "1 \n 2 \n 2 3 "
End of inner loop	                        result += "\n" → "1 \n 2 \n 2 3 \n"
return result	                            "1 \n 2 \n 2 3 \n"
console.log(generatePattern())	            Prints:
2. Challenge 2:The output are [40, 20, 30, 10], [40, 20, 30, 10]. This function takes an array arr as input ".arr.shift()" removes the first element (10) and stores it in first.
"arr.pop()" removes the last element (40) and stores it in last.
Now, the array becomes [20, 30]. "arr.unshift(last)" inserts last (40) at the beginning → [40, 20, 30]. "arr.push(first)" inserts first (10) at the end → [40, 20, 30, 10]. then return the function. the number in the function is a argument so the   original print twice

T-Diagram swapFirstLast(arr)
Variable / Expression             |       Value / Evaluation
numbers (initial)	              |      [10, 20, 30, 40]
arr (input to function)	          |      [10, 20, 30, 40]
first = arr.shift()	              |      first = 10, arr = [20, 30, 40]
last = arr.pop()	              |      last = 40, arr = [20, 30]
arr.unshift(last)	              |      arr = [40, 20, 30]
arr.push(first)	                  |      arr = [40, 20, 30, 10]
return arr	                      |      [40, 20, 30, 10]
console.log(swapFirstLast(numbers))	|    Prints [40, 20, 30, 10]
console.log(numbers)	            |    Prints [40, 20, 30, 10] (original array is modified)
3. Challenge 3: The output is [60, 45, 85, 90].This function takes an array grades as input. passing = [] create a empty array to store grades. inside the function has loop that Iterates through each grade in the grades array checking If the grade is 70 or higher, it is added at the end of passing using push(). else the grade is below 70, it is added at the beginning of passing using unshift(). then return the passing. Modified the grades to score as parameter of function filterPassingGrades then print the output.

T-Diagram filterPassingGrades(grades)
Variable / Expression	                    |        Value / Evaluation
scores (initial)	                        |            [85, 45, 90, 60]
grades (input to function)	                |            [85, 45, 90, 60]
passing (initial)	                        |            []
Iteration 1 (grade = 85)	                |            85 >= 70 → true → passing.push(85) → passing = [85]                    
Iteration 2 (grade = 45)	                |            45 >= 70 → false → passing.unshift(45) → passing = [45, 85]                
Iteration 3 (grade = 90)	                |            90 >= 70 → true → passing.push(90) → passing = [45, 85, 90]               
Iteration 4 (grade = 60)	                |            60 >= 70 → false → passing.unshift(60) → passing = [60, 45, 85, 90]
return passing	[60, 45, 85, 90]
console.log(filterPassingGrades(scores))	|           Prints [60, 45, 85, 90]
4. Challenge 4: The Output are { "id": 1, "completed": true},{"id": 2, "completed": false}.This function takes an array of task objects as input. Inside the function has loop iterates over each task object in the tasks array. The logical NOT operator {!} flip the completed property If completed is false, it becomes true.
If completed is true, it becomes false then return the updated task array. Since objects are passed by reference, modifying task.completed directly updates the original taskList. Modified the parameter to taskList since the object are modified in place the tasklist is also updated prints same results.


T-Diagram updateStatus(tasks)
Variable / Expression	                             |    Value / Evaluation
taskList (initial)	                                 |    [ { id: 1, completed: false }, { id: 2, completed: true } ]
tasks (input to function)	                         |    [ { id: 1, completed: false }, { id: 2, completed: true } ]
Iteration 1 (task = { id: 1, completed: false })	 |    task.completed = !false → true
Iteration 2 (task = { id: 2, completed: true })	     |    task.completed = !true → false
return tasks	                                     |    [ { id: 1, completed: true }, { id: 2, completed: false } ]
console.log(updateStatus(taskList))	                 |  Prints [ { id: 1, completed: true }, { id: 2, completed: false } ]
console.log(taskList)	                             |   Prints [ { id: 1, completed: true }, { id: 2, completed: false } ] (same as returned value)

5. Challenge 5: The output are "Found at index 1", "Not found". This function takes an parameters array arr and a target value. Inside the function has for loop iterates through all elements of "arr" parameter.Checking if the current element matches the target. If the current element arr[i] is equal to target, the function immediately returns "Found at index i". If the loop completes without finding target, the function returns "Not found". Then modified the paramter "arr" to "data" then add value to[5, 12, 8, 130, 44]. findValue(data, 12) returns "Found at index 1" because 12 is at index 1. findValue(data, 100) returns "Not found" because 100 is not in the array. 


T-Diagram findValue(arr, target)
Variable / Expression	                  |          Value / Evaluation
data (initial)                            |          	[5, 12, 8, 130, 44]
findValue(data, 12)	
Iteration 1 (i = 0)	                      |              arr[0] = 5, 5 === 12 → false
Iteration 2 (i = 1)	                      |              arr[1] = 12, 12 === 12 → true → Return "Found at index 1"
console.log(findValue(data, 12))	      |              Prints "Found at index 1"
findValue(data, 100)	
Iteration 1 (i = 0)	                      |              arr[0] = 5, 5 === 100 → false
Iteration 2 (i = 1)	                      |              arr[1] = 12, 12 === 100 → false
Iteration 3 (i = 2)	                      |              arr[2] = 8, 8 === 100 → false
Iteration 4 (i = 3)	                      |              arr[3] = 130, 130 === 100 → false
Iteration 5 (i = 4)                       |             	arr[4] = 44, 44 === 100 → false
End of loop	Return                        |              "Not found"
console.log(findValue(data, 100))	      |              Prints "Not found"