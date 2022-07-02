const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find(({ name }) => name === animal);
  return animals.residents.every((item) => item.age >= age);
}

module.exports = getAnimalsOlderThan;
