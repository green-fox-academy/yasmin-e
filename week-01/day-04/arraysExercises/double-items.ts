// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
'use strict';
let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
let drinks2: string[] = drinks.map(function double(item) {
    return item+item;
});
console.log(drinks2);
//or
let Drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
Drinks.map(function double(item, index) {
    console.log(item+item);
});
