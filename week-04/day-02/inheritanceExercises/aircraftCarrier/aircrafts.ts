export default class Aircraft {
  protected type: string;

  protected maxAmmo: number;

  protected baseDamage: number;

  protected ammo: number;

  protected allDamage: number;

  constructor(type: string, ammo: number, maxAmmo: number, baseDamage: number, allDamage: number) {
    this.type = type;
    this.ammo = ammo;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.allDamage = allDamage;
  }

  getAmmo(): number {
    return this.ammo;
  }

  fight(): number {
    const damageDelt = this.baseDamage * this.ammo;
    this.ammo = 0;
    this.allDamage += damageDelt;
    return damageDelt;
  }

  refill(amount: number): number {
    const ammoNeeded = this.maxAmmo - this.ammo;
    if (amount >= ammoNeeded) {
      this.ammo = this.maxAmmo;
      return amount - ammoNeeded;
    }
    this.ammo += amount;
    return 0;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage}`;
  }

  isPriority(): boolean {
    if (this.getType() === 'F35') {
      return true;
    }
    return false;
  }
}
