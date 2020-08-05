/* eslint-disable class-methods-use-this */
import StringedInstruments from './stringed-instruments';

export default class ElectricGuitrar extends StringedInstruments {
  constructor(numberOfStrings = 6, name = 'Electric Guitar') {
    super(name, numberOfStrings);
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

  sound(): string {
    return 'Twang';
  }
}
