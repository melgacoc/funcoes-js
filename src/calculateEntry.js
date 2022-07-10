const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return {children: child, adults: adult, seniores: senior};

}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const adultPrice = data.prices.adult * countEntrants(entrants).adult;
  const childPrice = data.prices.child * countEntrants(entrants).child;
  const seniorPrice = data.prices.senior * countEntrants(entrants).senior;
  return (adultPrice + childPrice + seniorPrice);
}

module.exports = { calculateEntry, countEntrants };
