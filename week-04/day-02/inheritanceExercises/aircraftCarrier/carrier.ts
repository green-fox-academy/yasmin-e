/* eslint-disable no-param-reassign */
import Aircraft from './aircrafts';

export default class Carrier {
  aircraftsStorage: Aircraft[];

  ammoStore: number;

  healthPoint: number;

  totalDamage: number;

  constructor(aircraftsStorage: Aircraft[] = [], ammoStore: number,
    healthPoint: number, totalDamage = 0) {
    this.aircraftsStorage = aircraftsStorage;
    this.ammoStore = ammoStore;
    this.healthPoint = healthPoint;
    this.totalDamage = totalDamage;
  }

  add(aircraft: Aircraft): void {
    this.aircraftsStorage.push(aircraft);
  }

  fill(): void {
    if (this.ammoStore === 0) {
      throw new Error('Ammo Store is empty.');
    }

    const priorityAircrafts = this.aircraftsStorage.filter((aircraft) => aircraft.isPriority());

    const notPriorityAircrafts = this.aircraftsStorage.filter((aircraft) => !aircraft.isPriority());

    const prioritizeAircrafts = [...priorityAircrafts, ...notPriorityAircrafts];

    prioritizeAircrafts.forEach((aircraft) => {
      this.ammoStore = aircraft.refill(this.ammoStore);
    });
  }

  fight(enemy: Carrier): void {
    this.aircraftsStorage.forEach((aircraft) => {
      this.totalDamage = aircraft.fight();
    });
    enemy.healthPoint -= this.totalDamage;
  }

  getStatus(): string {
    const carrierStatus = `HP: ${this.healthPoint}, Aircraft count: ${this.aircraftsStorage.length}, Ammo Storage: ${this.ammoStore}, Total Damage: ${this.totalDamage}`;
    const aircraftsStatus: string[] = [];
    this.aircraftsStorage.forEach((aircraft) => {
      aircraftsStatus.push(aircraft.getStatus());
    });
    return `${carrierStatus} \n ${aircraftsStatus.join('\n')}`;
  }
}
