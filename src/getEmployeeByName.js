const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeFisrt = employeeName;
  const employeeLast = employeeFisrt;
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employee) => employee.firstName === employeeFisrt || employee.lastName
  === employeeLast);
}

module.exports = getEmployeeByName;
