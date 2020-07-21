'use strict';
import { split } from "../stringExercises/simple-replace";
import { clear } from "console";

/*
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements */


let MachuPichu = [];
console.log(MachuPichu.length);

MachuPichu.push('William');

if (MachuPichu.length == 0) {
    console.log("The list is empty yo");
}
else {
    console.log("The list is not empty yo");
};

MachuPichu.push('John', 'Amanda');
console.log(MachuPichu.length);
console.log(MachuPichu[2]);

MachuPichu.join("\n");
MachuPichu.forEach(function (input, index) {
    console.log((index + 1) + ". " + input);
});

MachuPichu.splice(1, 1);
console.log(MachuPichu);

MachuPichu.reverse();
MachuPichu.forEach(function (input) {
    console.log(input);
});

MachuPichu.splice(0, 2);
console.log(MachuPichu);