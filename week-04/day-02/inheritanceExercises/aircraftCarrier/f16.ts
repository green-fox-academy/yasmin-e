import Aircraft from './aircrafts';

export default class F16 extends Aircraft {
  constructor(type = 'F16', ammo = 0, maxAmmo = 8, baseDamage = 30, allDamage = 0) {
    super(type, ammo, maxAmmo, baseDamage, allDamage);
  }
}
