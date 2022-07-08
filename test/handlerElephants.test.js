const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa a quantidade de elefantes', () => {
     expect(handlerElephants('count')).toBe(4);
  })
  it('testa se retorna uma array de nomes dos elefantes', () => {
        expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  })
  it('testa se a função retorna a média da idade dos elefantes', () => {
     expect(handlerElephants('averageAge')).toEqual(10.5);
  })
  it('testa se a função retorna a localização dos elefantes', () => {
     expect(handlerElephants('location')).toBe('NW');
  })
  it('testa se a função retorna a popularidade dos elefantes', () => {
     expect(handlerElephants('popularity')).toEqual(5);
  })
  it('testa se a função retorna os dias disponíveis pra vista', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  })
  it('testa se retorna undefined se nenhum parametro for passado', () => {
     expect(handlerElephants()).toEqual(undefined);
  })
  it('testa se retorna null quando o parametro passado não existr', () => {
     expect(handlerElephants('color')).toBe(null);
  })
  it('teste se retorna erro quando não for passado uma string como parametro', () => {
     expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  })
});
