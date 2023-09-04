const converterFahrenheitParaCelsius = require('./questao03');

describe('converterFahrenheitParaCelsius', () => {
    test('Deveria converter 32°F para 0°C', () => {
      const celsius = converterFahrenheitParaCelsius(32);
      expect(celsius).toBeCloseTo(0, 2);
    });
  
    test('Deve converter 68°F para 20°C', () => {
      const celsius = converterFahrenheitParaCelsius(68);
      expect(celsius).toBeCloseTo(20, 2);
    });
  
    test('Deve converter -4°F para -20°C', () => {
      const celsius = converterFahrenheitParaCelsius(-4);
      expect(celsius).toBeCloseTo(-20, 2);
    });
});