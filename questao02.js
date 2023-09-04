function validarEmail(email) {
    // Expressão regular para validar um endereço de e-mail
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regexEmail.test(email);
}

module.exports = validarEmail