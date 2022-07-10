const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animals = {};
  if(animal === ''){
    species.forEach((species) => { animals[species.name] = species.residents.length})
  }
}

module.exports = countAnimals;
