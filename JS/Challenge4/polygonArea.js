/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

//Square = { side }
//Triangle = { base, height }
//Rectangle = { base, height }

const area = ({
  polygon,
  base = undefined,
  height = undefined,
  side = undefined,
}) => {
  switch (polygon) {
    case "Square":
      if (!side) console.error("The Side is Needed");

      console.log(`The Area of the Square is ${side * 4}`);

      return side * 4;

    case "Rectangle":
      if (!base || !height) console.error("Missing params");

      console.log(`The Area of the Rectangle is ${base * height}`);

      return base * height;

    case "Triangle":
      if (!base || !height) console.error("Missing params");

      console.log(`The Area of the Triangle is ${(base * height) / 2}`);

      return (base * height) / 2;

    default:
      console.error("Invalid Polygon Type");
      return 0;
  }
};

area({ polygon: "Square", side: 5 });
area({ polygon: "Rectangle", height: 10, base: 20 });
area({ polygon: "Triangle", height: 10, base: 20 });

// With TypeScript we can do this better...

