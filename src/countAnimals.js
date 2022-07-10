const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return data.species.find((element) => element.name === animal.specie)
      .residents.length;
  }
  return data.species.find((element) => element.name === animal.specie)
    .residents.filter((element) => element.sex === animal.sex).length;
}


module.exports = countAnimals;
