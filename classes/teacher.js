const Person = require('./person');

// Your code here

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);

    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let combined = 0;

    teachers.forEach(teacher => {
      combined += teacher.yearsOfExperience;
    });

    return combined;
  }
}

const teacher1 = new Teacher("Hannah", "Florence", "Sciences", 10);
const teacher2 = new Teacher("Sandra", "Shelk", "Humanity", 15);

const years = Teacher.combinedYearsOfExperience([teacher1, teacher2]);

console.log(years);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}