/**
    Ejercicios de Lógica de Programación ( 1 / 10 )
*/


// 1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10

function contarCaracteres(cadena) {
    if (typeof cadena === "string") {
        return console.log(cadena.length)
    } else {
        return "Debe de ingresar una cadena de texto"
    }
}
const texto = "Ejemplo";
contarCaracteres(texto);

// 2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"
function recortarTexto(texto, valor) {
    if (typeof texto === "string" && typeof valor === "number") {
        return console.log(texto.slice(0, valor));
    } else {
        return console.log("Debe de ingresar una cadena de texto y el valor de caracteres a recortar");
    }
}

const texto2 = "Hola Dev´s";
recortarTexto(texto2, 2);

// 3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
function separarTexto(texto, separador) {
    if (typeof texto === "string" && typeof separador === "string") {
        return console.log(texto.split(separador));
    } else {
        return console.log("Debe de ingresar una cadena de texto y el caracter utilizado para separar el texto");
    }
}

const texto3 = "Texto utilizado para separar con algún valor";
separarTexto(texto3, " ");


// 4. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

function repetirTextoNveces(texto, veces) {
    if (typeof texto === "string" && typeof veces === "number") {
        texto = texto + ", ";
        return console.log(texto.repeat(veces))
    } else {
        return console.log("Debe de ingresar una cadena de texto y el valor de veces a repetir el texto");
    }
}

const texto4 = "Me gusta el café";
repetirTextoNveces(texto4, 2);