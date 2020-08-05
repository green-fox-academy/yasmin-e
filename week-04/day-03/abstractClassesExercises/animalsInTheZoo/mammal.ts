/* eslint-disable class-methods-use-this */
import Animal from './animal';

export default class Mammal extends Animal {
  breed(): string {
    return 'pushing miniature versions out.';
  }
}
