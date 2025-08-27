/** Ejercicios de Lógica de Programación (4-10) en JavaScript */

/** 12. Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
function esPrimo(num = undefined) {
    if (num === undefined) return console.warn("Debe de ingrear un número a validar");
    if (typeof num !== "number") return console.error(`Èl valor de ${num} no es un número`);
    if (num === 0) return console.warn("El valor del número debe ser mayor a 0");
    if (num === 1) return console.warn("El valor del número debe ser mayor a 1");

    for (let i = 2; i < num; i++) {
        if (num % i !== 0) return console.info(`El número ${num} es primo`)
        else console.info(`El número ${num} no es primo`)
    }
}

/*
esPrimo();
esPrimo("2");
esPrimo(0);
esPrimo(1);
esPrimo(2);
esPrimo(7);
*/

/** 13. Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
function esParOImpar(num = undefined) {
    if (num === undefined) return console.warn("No ingresaste un número");
    if (typeof num !== "number") return console.error(`El valor del numero ${num} no es un número`);

    return (num % 2 == 0) ? console.info(`El valor del número ${num} es Par`) : console.info(`El valor del número ${num} es Impar`)
}

/*
esParOImpar();
esParOImpar("2");
esParOImpar(20);
esParOImpar(22)
*/

/* 14. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32° */
function convertirGrados(grados = undefined, unidad = "") {
    if (grados === undefined) return console.warn("No ingresaste los grados a convertir");
    if (unidad == "") return console.warn("No ingresaste la unidad a convertir");
    if (typeof grados !== "number") return console.error(`El valor de los grados ${grados} no es un número`);
    if (grados == 0) return console.info(`El valor de los grados ${grados} debe ser mayor a 0`);
    if (typeof unidad !== "string") return console.error(`El valor de la unidad ${unidad} no es una cadena de texto`);

    unidad = unidad.toUpperCase();

    if (unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados * 9 / 5) + 32)}°F`);
    } else {
        if (unidad === "F") {
            return console.info(`${grados}°F = ${Math.round((grados - 32) * 5 / 9)}°C`);
        } else {
            return console.error(`La unidad ${unidad} no es válida, utiliza "C" para Celsius o "F" para Fahrenheit`);
        }
    }
}

/*
convertirGrados();
convertirGrados(32);
convertirGrados(0, "X");
convertirGrados(0, "C");
convertirGrados(100, "C");
convertirGrados(32, "F");
*/