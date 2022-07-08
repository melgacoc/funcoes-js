const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // return data.employees.filter(({ managers }) => managers.includes(managerId)).map(({ firstName, lastName }) =>
  // '${manager.firstName} ${lastName}');
  return employees.filter(({ managers }) => managers.some((value) => value === managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
