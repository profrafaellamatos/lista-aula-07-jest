const encontrarPalavra = require('./questao04');

describe('encontrarPalavra', () => {
    test('Deve encontrar a palavra na frase', () => {
        const frase = 'Esta é uma frase de exemplo.';
        const palavra = 'exemplo';
        expect(encontrarPalavra(frase, palavra)).toBeTruthy();
    });

    test('Deve encontrar a palavra mesmo com letras maiúsculas', () => {
        const frase = 'Esta é uma Frase de Exemplo.';
        const palavra = 'ExEmPlo';
        expect(encontrarPalavra(frase, palavra)).toBeTruthy();
    });

    test('Deve rejeitar a palavra se não estiver presente na frase', () => {
        const frase = 'Esta é uma frase de exemplo.';
        const palavra = 'testando';
        expect(encontrarPalavra(frase, palavra)).toBeFalsy();
    });
});