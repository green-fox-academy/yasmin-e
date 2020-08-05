import Person from './person';

export default class Student extends Person {
  private previousOrganization: string;

  private skippedDays: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'School of Life', skippedDays = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  static getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}
