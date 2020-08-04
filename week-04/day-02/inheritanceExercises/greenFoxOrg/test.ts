/* eslint-disable no-restricted-syntax */
import Student from './student';
import Person from './person';
import Mentor from './mentor';
import Sponsor from './sponsor';
import Cohort from './cohort';

const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i += 1) {
  elon.hire();
}

for (let i = 0; i < 4; i += 1) {
  sponsor.hire();
}

for (const person of people) {
  person.introduce();
  person.getGoal();
}

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
