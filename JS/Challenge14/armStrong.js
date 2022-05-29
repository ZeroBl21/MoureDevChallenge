/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const armStrong = (numbers) => {
  numbersString = String(numbers) // With this i can use Strings and Integers
  const length = numbersString.length
  let sum = 0

  for (const number of numbersString) {
    sum += number ** length
  }

  return sum == numbers ? true : false //It is so strange not use '==='
}

console.log(armStrong(153)) //ARMSTRONG!!!
console.log(armStrong('1')) //ARMSTRONG!!!
console.log(armStrong(2153)) //Not Armstrong :(
console.log(armStrong(532)) //Not Armstrong :(
console.log(armStrong('54748')) //ARMSTRONG!!!
console.log(armStrong(1634)) //ARMSTRONG!!!
