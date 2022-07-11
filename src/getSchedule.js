const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function getScheduleDay(day) {
  const { open, close } = hours[day];

  const exhibition = [];

  species.forEach((specie) => {
    const isExhibit = specie.availability.find((weekDay) => weekDay === day);

    if (isExhibit) {
      exhibition.push(specie.name);
    }
  });

  return {
    [day]: {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
    },
  };
}

function getCompleteSchedule() {
  const completeSchedule = {};

  Object.entries(hours).forEach(([day, dayHours]) => {
    const exhibition = [];
    const { open, close } = dayHours;

    species.forEach((specie) => {
      const isExhibit = specie.availability.find((weekDay) => weekDay === day);
      if (isExhibit) exhibition.push(specie.name);
    });

    completeSchedule[day] = {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
    };
  });

  return completeSchedule;
}

function getSchedule(scheduleTarget) {
  const isWeekDay = Object.keys(hours).includes(scheduleTarget);
  const animal = species.find((specie) => specie.name === scheduleTarget);
  if (isWeekDay) return getScheduleDay(scheduleTarget);
  if (animal) return animal.availability;
  return getCompleteSchedule();
}

module.exports = getSchedule;
