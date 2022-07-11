const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function getScheduleDay(day) {
  const { open, close } = hours[day];

  const posiblesDays = [];

  species.forEach((specie) => {
    const isExhibit = specie.availability.find((weekDay) => weekDay === day);

    if (isExhibit) {
      posiblesDays.push(specie.name);
    }
  });

  return {
    [day]: {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : posiblesDays,
    },
  };
}

function getCompleteSchedule() {
  const schedule = {};

  Object.entries(hours).forEach(([day, dayHours]) => {
    const possibleSchedule = [];
    const { open, close } = dayHours;

    species.forEach((specie) => {
      const isExhibit = specie.availability.find((weekDay) => weekDay === day);
      if (isExhibit) possibleSchedule.push(specie.name);
    });

    schedule[day] = {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : possibleSchedule,
    };
  });

  return schedule;
}

function getSchedule(scheduleTarget) {
  const day = Object.keys(hours).includes(scheduleTarget);
  const animal = species.find((specie) => specie.name === scheduleTarget);
  if (day) return getScheduleDay(scheduleTarget);
  if (animal) return animal.availability;
  return getCompleteSchedule();
}

module.exports = getSchedule;
