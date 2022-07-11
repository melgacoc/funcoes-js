const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((element) => element.id === id).responsibleFor[0];
  const animal = species.find((element) => element.id === employee).residents;
  const age = animal.sort((a, b) => b.age - a.age)[0];
  return [age.name , age.sex, age.age];
}

module.exports = getOldestFromFirstSpecies;
