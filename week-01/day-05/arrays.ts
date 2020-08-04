'use strict';

//Definition [ARRAYS]: An ORDERED list of values seperated by a comma, within [v1, v2, v3, v4].

let myArray: number[] = [];
myArray = [2, 5, 7, -6];

//Setting the initial value (First index is 0)

//nbr of elements in [A]
console.log(myArray.length);

//Iteration
for (let i: number = 0; i < myArray.length ; i++) {
    console.log(myArray[i]);
}

//Sorting
console.log(myArray.sort());

//"Multi dimensional Array" or Matrix
let bookshelf: string[][] = 
[
    ['yellow', 'black', 'yellow', 'black', 'yellow'],
    ['white', 'yellow', 'black', 'green', 'black'],
];

//getting one element out of the matrix
console.log(bookshelf[0][0]); //yellow
console.log(bookshelf[1][0]); //white

//Iteration multi-d Array
for (let i: number = 0; i < bookshelf.length; i++) {
    for (let g: number = 0; g < bookshelf[i].length; g++) {
        console.log(bookshelf[i][g]);
    }
    console.log(`done:${i}`);
}

//Definition Array splice() changes the content of an array, adding new elements while removing old ones
let myArray2: number[] = [];
myArray2 = [2, -4, 6, -8, 10];
//syntax --> myArray2.splice(index, howMany, [e1]);
//index: index at which we start changing, howMany: a nbr indicating the nbr of old array e's to remove.
//its return value: the removed array

let removed: number[] = myArray2.splice(1, 3, 4, 6, 8);
console.log(`I removed this ${removed}`);
console.log(`from this ${myArray2} using splice()`);