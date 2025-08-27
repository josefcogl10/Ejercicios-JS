/** Ejercicios de Lógica de Programación ( 2 / 10 ) en JavaScript */

/** 5. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
function invertirCadena(cadena) {
    let cadenaInvertida = "";

    if (cadena && typeof cadena === "string") {
        cadenaInvertida = cadena.split("").reverse()
        console.info(cadenaInvertida.toString().replace(/,/g, ""));
    } else {
        return console.warn("Debes de ingresar una cadena de texto");
    }
}

const cadena = "HOLA MUNDO";
invertirCadena(cadena);

/** 6. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
function contarPalabraEncontradas(cadena, palabra) {
    let contador = 0;
    const txtLimpio = cadena.replace(/[.,;:!?()"]/g, ""); // elimina puntuación básica

    (txtLimpio && palabra)
        ? (typeof txtLimpio === "string")
            ? (typeof palabra === "string")
                ? //txtLimpio.split(" ").forEach((elemento) => {
                //  if (elemento === palabra) { contador++; }
                //})
                contador = txtLimpio
                    .split(/\s+/)
                    .filter(elemento => elemento === palabra).length
                : console.warn("No se encontro la palabra a buscar")
            : console.warn("Debe de ingresar una cadena de texto")
        : console.warn("Debe de ingresar una cadena de texto y la palabra a buscar");

    return console.info(`La palabra ${palabra} se ha encontrado ${contador} veces en la cadena de texto`);
}

const cadena2 = "Hola mundo, adios mundo. El mundo es un lugar maravilloso para vivir en este mundo";
const palabra = "mundo";
contarPalabraEncontradas(cadena2, palabra);

/** 7. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
function esPalindromo(cadena) {
    if (!cadena) {
        console.warn("Debe de ingresar una cadena de texto");
        return;
    }

    if (typeof cadena !== "string") {
        console.warn("La cadena debe ser de tipo string");
        return;
    }

    const cadenaLimpia = cadena.toLowerCase().replace(/[\W_]/g, ''); // elimina espacios y caracteres no alfanuméricos
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    (cadenaLimpia === cadenaInvertida)
        ? console.info(`La cadena "${cadena}" es un palíndromo`)
        : console.info(`La cadena "${cadena}" no es un palíndromo`);
}
const cadenaPalindromo = "Salas";
esPalindromo(cadenaPalindromo);

/** 8. Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
function eliminarPatron(cadena, patron) {
    if (!cadena || !patron) {
        console.warn("Debe de ingresar una cadena de texto y un patron a eliminar");
        return;
    }

    if (typeof cadena !== "string") {
        console.warn("La cadena debe ser de tipo string");
        return;
    }

    if (typeof patron !== "string") {
        console.warn("El patron debe ser de tipo string");
        return;
    }

    const cadenaLimpia = cadena.replace(new RegExp(patron, 'ig'), '');
    console.info(cadenaLimpia);

}

const cadena3 = "xyz1, xyz2, xyz3, xyz4 y xyz5";
const patron = "xyz";
eliminarPatron(cadena3, patron);