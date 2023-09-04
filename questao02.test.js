const validarEmail = require("./questao02");

describe('validarEmailTest', () => {
    test('Deveria validar um e-mail válido', () => {
        const emailValido = 'user@email.com';
        expect(validarEmail(emailValido)).toBeTruthy();
    });


    test('Deveria rejeitar um e-mail sem @', () => {
        const emailInvalido = 'email.com'; 
        expect(validarEmail(emailInvalido)).toBeFalsy();
    });

    test('Deveria rejeitar um e-mail com domínio ausente', () => {
        const emailInvalido = 'usuario@'; // Domínio ausente
        expect(validarEmail(emailInvalido)).toBeFalsy();
    });

    test('Deveria rejeitar um e-mail sem nome de usuário', () => {
        const emailInvalido = '@dominio.com'; 
        expect(validarEmail(emailInvalido)).toBeFalsy();
    });

    test('Deveria rejeitar um e-mail com caracteres inválidos', () => {
        const emailInvalido = 'usuário@domínio.com';
        expect(validarEmail(emailInvalido)).toBeFalsy();
      });

      test('Deveria rejeitar um e-mail com domínio inválido', () => {
        const emailInvalido = 'usuario@dominio.';
        expect(validarEmail(emailInvalido)).toBeFalsy();
      });
});