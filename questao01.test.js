const ordenarNumeros = require('./questao01');

describe('ordenarNumerosTest', () => {
    test('Deveria ordenar uma lista de números em ordem crescente', () => {
        const listaDesordenada = [5, 2, 9, 1, 5];
        const listaOrdenada = ordenarNumeros(listaDesordenada);
        expect(listaOrdenada).toEqual([1, 2, 5, 5, 9]);
    });

    test('Deveria retornar uma lista vazia se a entrada for vazia', () => {
        const listaDesordenada = [];
        const listaOrdenada = ordenarNumeros(listaDesordenada);
        expect(listaOrdenada).toEqual([]);
    });
});