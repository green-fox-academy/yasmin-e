/* eslint-disable class-methods-use-this */
import Animal from './animal';

export default class Bird extends Animal {
  breed(): string {
    return 'laying eggs.';
  }
}
