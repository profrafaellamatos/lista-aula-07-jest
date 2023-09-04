function encontrarPalavra(frase, palavra) {
    frase = frase.toLowerCase();
    palavra = palavra.toLowerCase();

    return frase.includes(palavra);
}

module.exports = encontrarPalavra;