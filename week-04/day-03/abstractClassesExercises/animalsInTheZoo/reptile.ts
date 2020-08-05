/* eslint-disable class-methods-use-this */
import Animal from './animal';

export default class Reptile extends Animal {
  breed(): string {
    return 'by laying eggs.';
  }
}
