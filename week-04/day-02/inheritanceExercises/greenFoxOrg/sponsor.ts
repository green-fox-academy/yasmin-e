/* eslint-disable class-methods-use-this */
import Person from './person';

export default class Sponsor extends Person {
  private company: string;

  private hiredStudents: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire(): void {
    this.hiredStudents += 1;
  }

  getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}
