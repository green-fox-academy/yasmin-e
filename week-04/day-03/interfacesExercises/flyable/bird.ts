import Animal from '../../abstractClassesExercises/animalsInTheZoo/animal';
import Flyable from './flyable';

export default class Bird extends Animal implements Flyable {
  protected isFlying: boolean;

  constructor(name: string, age?: number, gender?: string, isFlying = false) {
    super(name, age, gender);
    this.isFlying = isFlying;
  }

  breed(): void {
    console.log(`${this.getName()} is breeding`);
  }

  fly(): void {
    if (this.isFlying === true) {
      console.log(`${this.getName()} is already flying`);
      return;
    }
    this.isFlying = true;
    console.log(`${this.getName()} is flying`);
  }

  land(): void {
    if (this.isFlying === true) {
      this.isFlying = false;
      console.log(`${this.getName()} is landing`);
      return;
    }
    console.log(`${this.getName()} is not flying. Can not land.`);
  }
}

const Bobby = new Bird('Bobby', 55, 'male');
Bobby.breed();
Bobby.land();
Bobby.fly();
Bobby.fly();
Bobby.land();
