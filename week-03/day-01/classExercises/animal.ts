'use strict';
/* Create an Animal class
    Every animal has a hunger value, which is a whole number
    Every animal has a thirst value, which is a whole number
    when creating a new animal object these values are created with the default 50 value
    Every animal can eat() which decreases their hunger by one
    Every animal can drink() which decreases their thirst by one
    Every animal can play() which increases both by one */

class Animal {
    hunger: number;
    thirst: number;

    constructor (hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat() {
        this.hunger -= 1;
    }

    drink() {
        this.thirst -= 1;
    }

    play() {
        this.thirst += 1;
        this.hunger += 1;
    }
}
const Zebra = new Animal();
Zebra.play();
console.log(Zebra.thirst);
Zebra.drink();
console.log(Zebra.thirst);