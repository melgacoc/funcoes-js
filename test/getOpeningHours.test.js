const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se retorna objeto quando não há parametro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('testa se retorna mensagem de aberto ou fechado quando passado parametro', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('1testa se envia mensagem quando o dia ou hora for abreviado', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('2testa se envia mensagem quando o dia ou hora for abreviado', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('3testa se envia mensagem quando o dia ou hora for abreviado', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('4testa se envia mensagem quando o dia ou hora for abreviado', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('5testa se envia mensagem quando o dia ou hora for abreviado', () => {
    expect(() => getOpeningHours('Sunday', '09:61-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('6testa se envia mensagem quando o dia ou hora for abreviado', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
});
