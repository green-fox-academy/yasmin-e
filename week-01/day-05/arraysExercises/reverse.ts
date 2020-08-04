// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`
'use strict';
let numbers: number[] = [3, 4, 5, 6, 7];
console.log(numbers.reverse())

function reverseNumbers (numbers: number[]) {
    let tempNumbers: number[] = [];
    for (let i: number = 0; i < numbers.length; i++) {
        tempNumbers[i] = numbers[numbers.length - i - 1];
    }
    return tempNumbers
};
console.log(reverseNumbers(numbers));