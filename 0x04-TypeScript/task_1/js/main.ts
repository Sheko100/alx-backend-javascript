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

interface StudentInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
}

interface StudentConstructor {
  (firstName: string, lastName: string): StudentInterface,
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

printTeacher(director1.firstName, director1.lastName);
