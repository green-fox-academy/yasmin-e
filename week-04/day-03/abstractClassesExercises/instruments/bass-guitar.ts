/* eslint-disable class-methods-use-this */
import StringedInstruments from './stringed-instruments';

export default class BassGuitar extends StringedInstruments {
  constructor(numberOfStrings = 4, name = 'Bass Guitar') {
    super(name, numberOfStrings);
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}
