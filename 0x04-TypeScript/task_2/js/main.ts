interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number) {
  let employee = null;

  if (typeof salary === 'number' && salary < 500) {
     employee = new Teacher();
  } else {
     employee = new Director();
  }

  return employee;
}

function isDirector(employee: DirectorInterface) {
  let state = false;

  if (employee instanceof Director) {
    state = true;
  }

  return state;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  let work = null;

  if (employee instanceof Director) {
    work = employee.workDirectorTasks;
  } else if (employee instanceof Teacher) {
    work = employee.workTeacherTasks;
  }

  console.log(work());
}

type subjects = 'Math' | 'History';

function teachClass(todayClass: subjects): string {
  let msg = '';

  if (todayClass === 'Math') {
    msg = 'Teaching Math';
  } else if (todayClass === 'History') {
    msg = 'Teaching History';
  }

  return msg;
}
