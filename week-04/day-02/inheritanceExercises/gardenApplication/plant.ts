export default class Plant {
  color: string;

  waterLevel: number;

  waterAbsorbtion: number;

  constructor(color: string, waterLevel: number, waterAbsorbtion: number) {
    this.color = color;
    this.waterLevel = waterLevel;
    this.waterAbsorbtion = waterAbsorbtion;
  }

  water(waterAmount: number): void {
    this.waterLevel += (waterAmount * this.waterAbsorbtion);
  }
}
