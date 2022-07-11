const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (species.find((element) => element.name === scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  if (hours[scheduleTarget]) {
    const { open, close } = hours[scheduleTarget];
    const days = species.filter((element) => element.availability.includes(scheduleTarget)).
    map((day) => day.name);
    if (days.length < 1) return { [scheduleTarget]: { officeHour: 'CLOSED', exhibition:
    'The zoo will be closed!' } };
    return {
      [scheduleTarget]: {
         officeHour: `Open from ${open}am until ${close}pm`,
         exhibition: days,
       },
    };
  }
  const result = {};
  const days = Object.keys(hours);
  days.map((day) => {
    const { open, close } = hours[day];
    const animals = species.filter((specie) => specie.availability.includes(day));
    result[day] = {
       officeHour: `Open from ${open}am until ${close}pm`,
       exhibition: animals.map((animal) => animal.name),
    };
   });
  result.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return result;
}

module.exports = getSchedule;
