const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);

    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {

    if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA";
    }

    const student = Student.maxGPA(student1, student2);

    return `${student.firstName} ${student.lastName} has the higher GPA.`;
  }

  static maxGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return student1;
    }

    return student2;
  }
}

const std1 = new Student("Kunle", "Ade", "Physics", 2.9);
const std2 = new Student("Tope", "Kola", "Chemistry", 2.9);

const highGrade = Student.compareGPA(std1, std2);

console.log(highGrade);



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}