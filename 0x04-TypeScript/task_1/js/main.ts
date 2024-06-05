interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  (fName: string, lName: string): void,
}

const printTeacher: printTeacherFunction = function (fName, lName) {
  console.log(`${fName[0]}, ${lName}`);
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

printTeacher(director1.firstName, director1.lastName);
