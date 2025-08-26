/**
    Ejercicios de Lógica de Programación ( 1 / 10 )
*/

// 1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10

function contarCaracteres(cadena) {
    if (typeof cadena === "string") {
        return console.info(cadena.length)
    } else {
        return console.warn("Debe de ingresar una cadena de texto");
    }
}
const texto = "Ejemplo";
contarCaracteres(texto);

// 2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"
function recortarTexto(texto, valor) {
    if (typeof texto === "string") {
        if (typeof valor === "number") {
            return console.info(texto.slice(0, valor));
        } else {
            return console.warn("Debe de ingresar el valor de caracteres a recortar");
        }
    } else {
        return console.warn("Debe de ingresar una cadena de texto");
    }
}

const texto2 = "Hola Dev´s";
recortarTexto(texto2, 9);

// 3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
function separarTexto(texto, separador) {
    /**
        if (typeof texto === "string" && typeof separador === "string") {
            return console.info(texto.split(separador));
        } else {
            return console.warn("Debe de ingresar una cadena de texto y el caracter utilizado para separar el texto");
        }
    */

    // Optimización del código utilizando concatenación de operadores ternarios
    !(typeof texto === "string" && texto)
        ? console.warn("Debe de ingresar una cadena de texto a separar")
        : !(typeof separador === "string")
            ? console.warn("Debe de ingresar el caracter utilizado para separar el texto")
            : console.info(texto.split(separador));
}

const texto3 = "Texto utilizado para separar con algún valor";
separarTexto(texto3, "t");


// 4. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

function repetirTextoNveces(texto = "", veces = undefined) {
    /**
     * 
     *  if (typeof texto === "string" && typeof veces === "number") {
        texto = texto + ", ";
        return console.info(texto.repeat(veces))
        } else {
            return console.warn("Debe de ingresar una cadena de texto y el valor de veces a repetir el texto");
        }
     * 
     */

    //texto = texto + ", ";
    (!texto && typeof texto === "string")
        ? console.warn("Debe de ingresar una cadena de texto a repetir")
        : (veces === undefined && typeof veces !== "number")
            ? console.warn("Debe de ingresar el valor de veces a repetir el texto")
            : console.info(texto.repeat(veces));
}

const texto4 = "Me gusta el café";
repetirTextoNveces();
repetirTextoNveces(texto4);
repetirTextoNveces("", 2);
repetirTextoNveces(texto, 2);