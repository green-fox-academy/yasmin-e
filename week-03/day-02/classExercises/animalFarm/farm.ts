/*  Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal  */

import Animal from './animal';

class Farm {
  private slots: number;

  private farm: Animal[];

  constructor(slots: number, farm: Animal[] = []) {
    this.slots = slots;
    this.farm = farm;
  }

  breed() {
    if (this.slots > this.farm.length) {
      this.farm.push(new Animal());
      console.log('Enough slots! New animal bred.');
    } else {
      console.log('Not enough slots. No new animals bred.');
    }
  }

  slaughter() {
    console.log('Slaughtering the least hungry animal');
    let animalToSlaughter = this.farm[0];
    for (let i = 0; i < this.farm.length; i += 1) {
      if (this.farm[i].hunger < animalToSlaughter.hunger) {
        animalToSlaughter = this.farm[i];
      }
    }
    const slaughterIndex = this.farm.indexOf(animalToSlaughter);
    this.farm.splice(slaughterIndex, 1);
  }
}

const myFarm = new Farm(5, [new Animal(55, 33), new Animal(22, 5)]);
console.log(myFarm);
myFarm.breed();
console.log(myFarm);
myFarm.breed();
console.log(myFarm);
myFarm.breed();
console.log(myFarm);
myFarm.breed();
console.log(myFarm);
myFarm.slaughter();
console.log(myFarm);
