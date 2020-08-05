import Person from './person';

export default class Mentor extends Person {
  private level: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}
