import Plant from './plant';

export default class Flower extends Plant {
  constructor(color: string, waterLevel = 0, waterAbsorbtion = 0.75) {
    super(color, waterLevel, waterAbsorbtion);
  }

  needsWater(): void {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} Flower needs water`);
      return;
    }
    console.log(`The ${this.color} Flower doesn't need water`);
  }
}
