import Mentor from './mentor';
import Student from './student';

export default class Cohort {
  private name: string;

  private students: Student[];

  private mentors: Mentor[];

  constructor(name: string, students = [], mentors = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(Student: Student): void {
    this.students.push(Student);
  }

  addMentor(Mentor: Mentor): void {
    this.mentors.push(Mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}
