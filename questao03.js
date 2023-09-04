function converterFahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

module.exports = converterFahrenheitParaCelsius