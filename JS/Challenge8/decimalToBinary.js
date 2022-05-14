/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const decimalToBinary = (number) => {

    if (typeof (number) !== "number" || number < 0) return "0"

    binary = "";

    while (number >= 1) {
        binary = (number % 2) + binary;
        number = Math.floor(number / 2);
    }

    return binary;
}

console.log(decimalToBinary(2112));
console.log(decimalToBinary(16));
console.log(decimalToBinary(14));
console.log(decimalToBinary(744));
console.log(decimalToBinary("Hello Wolrd"));
console.log(decimalToBinary(-1000));
