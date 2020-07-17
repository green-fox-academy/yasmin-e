'use strict';

//Definition [FUNCTIONS] A function is a "thing" that takes input and gives output(return value).
//Sometimes, functions don't have outputs. They just do something to the input without returning anything.
//their purpose is: reusability, reducing code duplication, abstraction and parameterization.


function add (x:number, y:number):number {
    return x+y;
}

let addedNumbers: number = add(4,5);
console.log(add(4,5));


//function with a default value
function multiply (x1: number, y1:number = 10):number {
    return x1*y1;
}
let fifty = multiply(5);
console.log(fifty);

//Using a f(x) as a parameter ***not mandatory knowledge but good to know***
function doSomethingWithNumbers(a: number, b:number, fn:(a: number, b: number) => number):number {
    return fn(a,b);
}


console.log(doSomethingWithNumbers(4,5, multiply));
console.log(doSomethingWithNumbers(4,5,add));

//Storing a f(x) in a var
let myArray: string[] = ['some string', 'another string'];
myArray.forEach(console.log);

let Doudou = function (param1: string, param2: string):string {
    console.log(param1+param2);
    return param1+param2;
};

//F(x) in an Array **a lot like a for loop but without index and i++**
myArray.forEach(function (value, index, array) {
    console.log(value);
});


//F(x) in a multi-d Array
let bookshelf: string [][] = [
    ['yellow', 'black', 'yellow'],
    ['white', 'green', 'red']

];

bookshelf.forEach(function (row, index) {
    console.log(index);
    row.forEach(function (box) {
        console.log(box);
    })
});

//same thing below
let loopThrough = function (row, index) {
    console.log(index);
    row.forEach(function (box) {
        console.log(box);
    })
};

bookshelf.forEach(loopThrough);


//variable scope
let bookshelf2: string [][] = [
    ['yellow', 'black', 'yellow'],
    ['white', 'green', 'red']

];

bookshelf2.forEach(function (row, index) {
    console.log(bookshelf2);
    row.forEach(function (box) {
        console.log(box);
    })
});

//this gives an error msg because LET works with BLOCKSCOPE so whatever defined variable only works within the block.
{
    let x = 100;
    
}
//console.log(x);

/* browsers do not read TS files, we have to translte it to JS */
// in terminal 'tsc file.ts' will generate a .js file by compiling