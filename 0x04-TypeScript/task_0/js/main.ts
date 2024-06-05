interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const student1: Student =  {
  firstName: 'Shaker',	
  lastName: 'Sharabi',
  age: 26,
  location: 'Kafr El-Shaikh',
};
const student2: Student = {
  firstName: 'Arthur',	
  lastName: 'Morgan',
  age: 45,
  location: 'Blackwater',
};

const studentsList = [student1, student2];

window.addEventListener('DOMContentLoaded', renderTable);


function renderTable() {
  const students = studentsList;
  const table = document.createElement('TABLE');
  const headRow = document.createElement('TR');
  const hCell1 = document.createElement('TH');
  const hCell2 = document.createElement('TH');
  const rows = [];

  hCell1.innerText = 'First Name';
  hCell2.innerText = 'Location';

  headRow.append(hCell1, hCell2);
  rows.push(headRow);

  for (let i = 0; i < students.length; i++) {
    let row = document.createElement('TR');
    let nameCell = document.createElement('TD');
    let loctnCell = document.createElement('TD');

    nameCell.innerText = students[i].firstName;
    loctnCell.innerText = students[i].location;

    row.append(nameCell, loctnCell);
    
    rows.push(row);
  }

  table.append(...rows);

  document.body.append(table);
}
