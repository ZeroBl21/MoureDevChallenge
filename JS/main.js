/*
 * Aquí aparecerá el enunciado y podrás resolverlo en el propio fichero.
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🗓reto-semanal" para preguntas, dudas o prestar ayuda la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const fizzBuzz = (limit) => {
	if (limit < 0) {
		throw new Error("Invalid max range");
	}

	const array = new Array();

	for (let i = 1; i < limit; i++) {
		if (i % 15 === 0) array.push("FizzBuzz");
		else if (i % 3 === 0) array.push("Fizz");
		else if (i % 5 === 0) array.push("Buzz");
		else array.push(String(i));
	}

	return array;
};

console.table(fizzBuzz(100));
