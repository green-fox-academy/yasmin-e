import Aircraft from './aircrafts';

export default class F35 extends Aircraft {
  constructor(type = 'F35', ammo = 0, maxAmmo = 12, baseDamage = 50, allDamage = 0) {
    super(type, ammo, maxAmmo, baseDamage, allDamage);
  }
}
