export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      const departments = [];
      const keys = Object.keys(this.allEmployees);
      keys.forEach((department) => {
        if (!departments.includes(department)) {
          departments.push(department);
        }
      });
      return departments.length;
    },
  };
  return report;
}
