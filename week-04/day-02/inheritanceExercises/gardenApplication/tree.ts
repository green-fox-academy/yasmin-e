import Plant from './plant';

export default class Tree extends Plant {
  constructor(color: string, waterLevel = 0, waterAbsorbtion = 0.4) {
    super(color, waterLevel, waterAbsorbtion);
  }

  needsWater(): void {
    if (this.waterLevel < 10) {
      console.log(`The ${this.color} Tree needs water`);
      return;
    }
    console.log(`The ${this.color} Tree doesn't need water`);
  }
}
