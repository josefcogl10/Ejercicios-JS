/** Ejercicios de Lógica de Programación(7 - 10) */

// 21. Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
const elevacion = (array = undefined) => {
    if (array === undefined) return console.error("No se ingreso un array con valores númericos");
    if (!Array.isArray(array)) return console.error("El elemento ingresado no es un array con valores númericos");
    if (array.length === 0) return console.info("Debe de ingresar un array con valores númericos");

    for (let e of array) {
        if (typeof e !== "number") return console.info(`El valor del elemento ${e} en el array ${array}, no es un número`);
    }

    let arrarElevado = [];
    for (let e of array) {
        arrarElevado.push(e * e);
    }

    return console.info(`El array original es ${array} y el array elevado al cuadrado es ${arrarElevado}`);
}

//elevacion();
//elevacion({});
//elevacion([]);
//elevacion(["a", 3, 5]);
//elevacion([1, 3, 5, 7, 9]);

// 22. Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]
const mayorMenor = (array = undefined) => {
    if (array === undefined) return console.error("No se ingreso un array con valores númericos");
    if (!Array.isArray(array)) return console.error("El elemento ingresado no es un array con valores númericos");
    if (array.length === 0) return console.warn("Debe de ingresar un array con valores númericos");

    for (let e of array) {
        if (typeof e !== "number") return console.warn(`El valor del elemento ${e} en el array ${array}, no es un número`);
    }

    return console.info(`El número mayor del array ${array} es ${Math.max(...array)} y el número menor es ${Math.min(...array)}`);
}

//mayorMenor();
//mayorMenor({});
//mayorMenor([]);
//mayorMenor(["a", 3, 5]);  
//mayorMenor([1, 3, 5, 7, 9]);
//mayorMenor([1, 4, 5, 99, -60]);

// 23. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
const parEImpar = (array = undefined) => {
    if (array === undefined) return console.error("No se ingreo un array con valores númericos");
    if (!Array.isArray(array)) return console.error("El elemento ingresado no es un array con valores númericos");
    if (array.length === 0) return console.warn("Debe de ingresar un array con valores númericos");

    for (let e of array) {
        if (typeof e !== "number") return console.warn(`El valor del elemento ${e} del array ${array}, no es un número`);
    }

    let pares = [], impares = [];
    for (let e of array) {
        (e % 2 == 0)
            ? pares.push(e)
            : impares.push(e)
    }

    return console.info(`Pares: ${pares}, Impartes: ${impares}`);
}

//parEImpar();
//parEImpar({});
//parEImpar([]);
//parEImpar(["a", 3, 5]);
//parEImpar([1, 3, 5, 7, 9]);
//parEImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);