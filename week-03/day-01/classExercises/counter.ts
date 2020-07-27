'use strict';
//  Create a Counter class
//      which has an integer property
//      when creating it should have a default value 0 or we can specify it when creating
//      we can add(number) to increase the counter's value by a whole number
//      or we can add() without parameters just increasing the counter's value by one
//      and we can get() the current value as string
//      also we can reset() the value to the initial value

class Counter {
    integer: number;
    init: number;

    constructor(integer: number = 0, init: number = 0) {
        this.integer = integer;
        this.init = init;
    }

    add(number?: number) {
        if (number === undefined) {
            this.integer++;
        }
        else {
            this.integer = this.integer + number;
        }
    }
    
    get() {
        return this.integer.toString();
    }

    reset() {
        this.integer = this.init;
    }
}
const FiveHundred = new Counter(500);
FiveHundred.add(55);
console.log(FiveHundred.integer);
FiveHundred.add();
console.log(FiveHundred.integer);
console.log(FiveHundred.get());
FiveHundred.reset();
console.log(FiveHundred.integer);