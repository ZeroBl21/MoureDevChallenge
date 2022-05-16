/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// This was a test

// const morse = {
//     ". -": "A",
//     "- . . .": "B",
//     "- . - .": "C",
//     "- . .": "D",
//     ".": "E",
//     ". . - .": "F",
//     "- - .": "G",
//     ". . . .": "H",
//     ". .": "I",
//     ". - - -": "J",
//     "- . -": "K",
//     ". - . .": "L",
//     "- -": "M",
//     "- .": "N",
//     "- - -": "O",
//     ". - - .": "P",
//     "- - . -": "Q",
//     ". - .": "R",
//     ". . .": "S",
//     "-": "T",
//     ". . -": "U",
//     ". . . -": "V",
//     ". - -": "W",
//     "- . . -": "X",
//     "- . - -": "Y",
//     "- - . .": "Z",
//     ". . . . .": " ",
// };

const diccionary = [
    {morse: ". -", natural: "A"},
    {morse: "- . . .", natural: "B"},
    {morse: "- . - .", natural: "C"},
    {morse: "- . .", natural: "D"},
    {morse: ".", natural: "E"},
    {morse: ". . - .", natural: "F"},
    {morse: "- - .", natural: "G"},
    {morse: ". . . .", natural: "H"},
    {morse: ". .", natural: "I"},
    {morse: ". - - -", natural: "J"},
    {morse: "- . -", natural: "K"},
    {morse: ". - . .", natural: "L"},
    {morse: "- -", natural: "M"},
    {morse: "- .", natural: "N"},
    {morse: "- - -", natural: "O"},
    {morse: ". - - .", natural: "P"},
    {morse: "- - . -", natural: "Q"},
    {morse: ". - .", natural: "R"},
    {morse: ". . .", natural: "S"},
    {morse: "-", natural: "T"},
    {morse: ". . -", natural: "U"},
    {morse: ". . . -", natural: "V"},
    {morse: ". - -", natural: "W"},
    {morse: "- . . -", natural: "X"},
    {morse: "- . - -", natural: "Y"},
    {morse: "- - . .", natural: "Z"},
    {morse: ". . . . .", natural: " "},
];

const morseTranslate = (text) => {
    ans = "";

    if (text.includes("  ")) {
        codes = text.split("  ");
        codes.forEach((code) => {
            char = diccionary.find(({morse}) => morse == code);
            ans += char.natural;
        });
    } else {
        codes = text.split("");
        codes.forEach((code) => {
            char = diccionary.find(({natural}) => natural == code);
            ans += char.morse + "  ";
        });
    }

    return ans;
};

console.log(
    morseTranslate(
        ". . . .  - - -  . - . .  . -  . . . . .  - -  . . -  - .  - . .  - - -"
    )
);

console.log(morseTranslate("HOLA MUNDO"));;

//Well, that was hard, and I don't like my result, too so slow.
