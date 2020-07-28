/* Create an Animal class
    Every animal has a hunger value, which is a whole number
    Every animal has a thirst value, which is a whole number
    when creating a new animal object these values are created with the default 50 value
    Every animal can eat() which decreases their hunger by one
    Every animal can drink() which decreases their thirst by one
    Every animal can play() which increases both by one */

export default class Animal {
  hunger: number;

  thirst: number;

  constructor(hunger = 50, thirst = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(): void {
    this.hunger -= 1;
  }

  drink(): void {
    this.thirst -= 1;
  }

  play(): void {
    this.thirst += 1;
    this.hunger += 1;
  }
}
