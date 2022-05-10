/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🗓reto-semanal" para preguntas, dudas o prestar ayuda la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// First Version

// function shallowEqual(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const isAnagram = (wordOne, wordTwo) => {
// 	if (wordOne.lenght !== wordTwo.lenght) return false;

// 	let obj = {};
// 	let obj2 = {};

// 	for (let i of wordOne.toLowerCase()) {
// 		obj[i] = isNaN(obj[i]) ? 1 : obj[i] + 1;
// 	}

// 	for (let i of wordTwo.toLowerCase()) {
// 		obj2[i] = isNaN(obj2[i]) ? 1 : obj2[i] + 1;
// 	}

// 	return shallowEqual(obj, obj2)
// };

// console.log(isAnagram("hello", "olleH"));

// Final Version

const isAnagram = (wordOne, wordTwo) => {
  if (wordOne.length !== wordTwo.length) return false;

  let obj = {};

  for (let i of wordOne.toLowerCase()) {
    obj[i] = isNaN(obj[i]) ? 1 : obj[i] + 1;
  }

  for (let char of wordTwo.toLowerCase()) {
    if (!obj[char]) return false;
    obj[char]--;
    if (obj[char] === 0) delete obj[char];
  }

  return [...Object.keys(obj)].length === 0;
};

console.log(isAnagram("hello", "olleH"));

//Ideal Version (It isn't mine)
//Author: https://leetcode.com/problems/valid-anagram/discuss/66527/A-few-JavaScript-solutions

// var isAnagram = function(s, t) {
// 	return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('');
// };

// console.log(isAnagram("hello", "olleH"));

