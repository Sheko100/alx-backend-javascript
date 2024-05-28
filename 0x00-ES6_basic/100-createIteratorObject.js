export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  let employArr = [];
  for (const employee of Object.values(employees)) {
    employArr = [...employArr, ...employee];
  }
  return employArr;
}
