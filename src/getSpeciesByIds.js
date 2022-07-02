const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === ' ') {
    return [];
  }
  return data.species.filter((animal) => ids.includes(animal.id));
}

module.exports = getSpeciesByIds;
