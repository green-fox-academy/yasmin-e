

import { localeCompare, indexOf, charAt } from "../stringExercises/simple-replace";

let ListA = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let ListB = ListA.slice();
console.log(ListB);

ListA.some(function (input) {
    if (input.includes('Durian')) {
        console.log('List A contains Durian')
    }
 });

ListB.splice(3, 1)
console.log(ListB);

ListA.splice(4, 0, 'Kiwifruit');
console.log(ListA);

function compare (a: any, b: any) {
    if (a.length > b.length) {
        return "ListA is bigger";
    }
    else {
        return "ListB is bigger";
    }
};
console.log(compare(ListA, ListB));

console.log(ListA.indexOf('Avocado'));
console.log(ListB.indexOf('Durian'));

ListB.push('Passion Fruit', 'Pomelo');

console.log(ListA[2]);