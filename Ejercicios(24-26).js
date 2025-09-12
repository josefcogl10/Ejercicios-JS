/* Ejercicios de Lógica de Programación (8-10) */

// 24 Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
const ordenarArray = (array = undefined) => {
    if (array === undefined) return console.error("No se a ingresado un ararreglo");
    if (!Array.isArray(array)) return console.error("No ha ingresado un arregño valido");
    if (array.length === 0) return console.warn("Debe ingresar un arreglo con valores númericos");

    for (let e of array) {
        if (typeof e !== "number") return console.warn(`El valor del elemento "${e}" del arreglo no es un número`);
    }

    let ascendente = array.map(e => e).sort((a, b) => a - b);
    let descendente = array.map(e => e).sort((a, b) => b - a);

    return console.info(`El arreglo original es ${array}, 
                            el arreglo ordenado de forma ascendente es ${ascendente} 
                                y el arreglo ordenado de forma descendente es ${descendente}`);
}

//ordenarArray();
//ordenarArray({}); 
//ordenarArray([]);
//ordenarArray(["a", 3, 5]);
//ordenarArray([7, 5, 7, 8, 6]);

// 25. Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]
const eliminarDuplicados = (array = undefined) => {
    if (array === undefined) return console.error("No se a ingresado un arreglo");
    if (!Array.isArray(array)) return console.error("No ha introducido un arreglo valido");
    if (array.length === 0) return console.warn("Debe de ingresar un arreglo con valores");

    for (let e of array) {
        if (typeof e !== "number" && typeof e !== "string" && typeof e !== "boolean") return console.warn(`El valor del elemento "${e}" del arreglo no es un número, cadena de texto o booleano`);
    }

    let aux = [...array];

    for (let i = 0; i < aux.length; i++) {
        for (let j = i + 1; j < aux.length; j++) {
            if (aux[i] === aux[j]) {
                aux.splice(j, 1);
                j--;
            }
        }
    }

    return console.info(`El arreglo original es ${array} y el arreglo sin duplicados es ${aux}`);
}

//eliminarDuplicados();
//eliminarDuplicados({});
//eliminarDuplicados([]);
//eliminarDuplicados(["a", 3, 5, true, false, "b", 3, 2, 5, true]);
//eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26. Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5
const promedio = (array = undefined) => {
    if (array === undefined) return console.error("No se ingreso un arreglo");
    if (!Array.isArray(array)) return console.error("No se ingreso un arreglo valido");
    if (array.length === 0) return console.warn("Debe de ingresar un arreglo con valores númericos");

    for (let e of array) {
        if (typeof e !== "number") return console.warn(`El valor del elemento ${e}} debe ser un número`);
    }

    let promedio = 0
    for (let e of array) {
        promedio += e;
    }

    return console.info(`El promedio de los valores del arreglo ${array} es ${promedio / array.length}`);
}

//promedio();
//promedio({});
//promedio([]);
//promedio(["a", 3, 5]);
//promedio([9,8,7,6,5,4,3,2,1,0]);
//promedio([100, 200, 300, 400, 500]);