'use strict';
/*Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal*/
import { Animal } from './animal';
import { REPL_MODE_STRICT } from 'repl';

class Farm {

    slots: number;
    farm: Animal[];

    constructor(slots: number = 3, farm: Animal[] = []) {
        this.slots = slots;
        this.farm = farm;
    }

    breed() {
        if (this.slots > this.farm.length) {
            this.farm.push(new Animal());
            console.log('Enough slots! New animal bred.');
        }
        else {
            console.log('Not enough slots. No new animals bred.');
        }
    }

    slaughter() {
        console.log('Slaughtering the least hungry animal');
        for (let i: number = 0; i<this.farm.length; i++) {
            let min = this.farm[0];
            if (this.farm[i].hunger < min.hunger) {
                min = this.farm[i];
                let slaughterIndex = this.farm.indexOf(min);
                this.farm.splice(slaughterIndex, 1);
            };
        }
    }
}

let myFarm = new Farm(5, [
        new Animal(55, 33),
        new Animal(22, 5),
]);
console.log(myFarm.farm);
myFarm.breed();
console.log(myFarm.farm);
myFarm.slaughter();
console.log(myFarm.farm);