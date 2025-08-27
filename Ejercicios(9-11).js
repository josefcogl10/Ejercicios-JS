/** Ejercicios de Lógica de Programación ( 3 / 10 ) en JavaScript */

/* 9. Programa una función que obtenga un numero aleatorio entre 501 y 600 */
function numeroAleatorio() {
    return Math.round(Math.random() * (600 - 501) + 501);
}

console.info(numeroAleatorio())
console.info(numeroAleatorio())
console.info(numeroAleatorio())

/* 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true */
function esCapicua(numero = 0) {

    if (!numero) return console.warn("No ingresaste un número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);
    if (numero < 0) return console.error("El número no puede ser negativo");
    if (!Number.isInteger(numero)) return console.error("El número debe ser entero");

    let numReves = numero.toString();
    numReves = parseInt(numReves.split("").reverse().join(""));
    (numero == numReves) ? console.info(`El número ${numero} es capicúa`) : console.info(`El número ${numero} no es capicúa`);
}

esCapicua();
esCapicua("Hola");
esCapicua(-2);
esCapicua(3.5);
esCapicua(1234);
esCapicua(2002);

/* 11. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */
function factorial(numero = undefined) {

    if (numero === 0) return console.info("El factorial de 0 es 1");
    if (!numero) return console.warn("No ingresaste un número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);
    if (numero < 0) return console.error("El número no puede ser negativo");
    if (!Number.isInteger(numero)) return console.error("El número debe ser entero");

    let factorial = numero;

    for (let i = numero - 1; i > 0; i--) {
        factorial *= i;
        console.log(factorial);
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

factorial();
factorial("5");
factorial(-5);
factorial(3.5);
factorial(0);
factorial(6);