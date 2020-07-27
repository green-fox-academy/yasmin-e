'use strict';
/*Create Student and Teacher classes
Student
learn() -> prints the student is learning something new
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

class Student {
    learn() {
        console.log('The student is learning something new')
    }
    question(teacher) {
        teacher.answer();
    }

}
class Teacher {
    teach(student) {
        student.learn();
    }
    answer() {
        console.log('The teacher is answering the question')
    }
}

let student = new Student();
let teacher = new Teacher();
student.question(teacher);
teacher.teach(student);
