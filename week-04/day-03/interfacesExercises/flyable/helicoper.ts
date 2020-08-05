import Vehicle from './vehicle';
import Flyable from './flyable';

export default class Helicopter extends Vehicle implements Flyable {
  constructor(name: string, fuelLevel = 50, isFlying = false) {
    super(name, fuelLevel, isFlying);
  }

  land(): void {
    if (this.isFlying === true) {
      this.isFlying = false;
      console.log(`The Helicopter ${this.name} just landed.`);
      return;
    }
    console.log(`The Helicopter ${this.name} is not flying. Can not land.`);
  }

  fly(): number {
    this.isFlying = true;
    this.fuelLevel -= 10;
    console.log(`The Helicopter ${this.name} is flying!`);
    return this.fuelLevel;
  }
}

const Awax = new Helicopter('AWAX');
Awax.land();
console.log('Remaining fuel: ', Awax.fly());
Awax.land();
