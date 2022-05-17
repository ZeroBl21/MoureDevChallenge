/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const isBalanced = (string) => {

    // This is the first version, i don't proud of it
    // let ans = {
    //     "{": 0,
    //     "}": 0,
    //     "[": 0,
    //     "]": 0,
    //     "(": 0,
    //     ")": 0,
    // };

    // for (const letter of string) {
    //     if (!isNaN(ans[letter])) ans[letter]++

    // }

    // if ((ans["{"] - ans["}"]) == 0 && (ans["["] - ans["]"]) == 0 && (ans["("] - ans[")"]) == 0) {
    //     return "Balanced"
    // } else {
    //     return "Unbalanced"
    // }

    const diccionary = {
        "{": "}",
        "[": "]",
        "(": ")",
    };

    let left = Object.keys(diccionary);
    let right = Object.values(diccionary);
    let ans = 0;

    for (const key of string) {
        if (left.includes(key)) {
            ans++
        } else if (right.includes(key)) {
            ans--;
        }

        if (ans < 0) {
            return false
        }
    }

    return ans > 0 ? false : true
};

console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"));
console.log(isBalanced("{a + b [c] * (2x2)}}}}"))
console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"))
console.log(isBalanced("{ a * ( c + d ) ] - 5 }"))
console.log(isBalanced("{a^4 + (((ax4)}"))
console.log(isBalanced("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"))
console.log(isBalanced("{{{{{{(}}}}}}"))
console.log(isBalanced("(a"))

//This was harder than I expected
//I took the "tests cases" after doing it
