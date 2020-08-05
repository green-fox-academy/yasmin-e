export default abstract class Vehicle {
  protected name: string;

  protected fuelLevel: number;

  protected isFlying: boolean;

  constructor(name: string, fuelLevel: number, isFlying = false) {
    this.name = name;
    this.fuelLevel = fuelLevel;
    this.isFlying = isFlying;
  }
}
