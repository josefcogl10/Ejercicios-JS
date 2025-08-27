/** Ejercicios de Lógica de Programación (5-10) en JavaScript */

/* 15. Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
function conversionBase(numero = undefined, base = undefined) {
    if (numero === undefined) return console.warn("No ingresaste el número a convertir");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un número`);
    if (base === 2) {
        return console.info(`El número ${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`El número ${numero} base ${base} = ${numero.toString(2)} base 2`);
    } else {
        return console.error("El tipo de base a convertir no es válido");
    }
}

/*
conversionBase();
conversionBase("2");
conversionBase(100);
conversionBase(100, "2");
conversionBase(100, 2);
conversionBase(4, 10);
conversionBase(100, 4);
*/


/* 16.  Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
function descuento(monto = undefined, descuento = undefined) {
    if (monto === undefined) return console.warn("Debe ingresar el monto");
    if (typeof monto !== "number") return console.error("El monto ingresado debe ser un número");

    if (descuento === undefined) return console.warn("Debe ingresar el descuento a aplicar");
    if (typeof descuento !== "number") return console.error("El descuento ingresado debe ser un número");
    if (descuento < 0) return console.error("El descuento no puede ser negativo");

    let montoFinal = monto - (descuento * 100) / 100;
    return console.info(`El monto final des de ${montoFinal}`);
}

/*
descuento();
descuento("2000", 20);
descuento(2000);
descuento(2000, -20);
descuento(2000, "20");
descuento(2000, 20);
*/

/* 17. Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
function calcularAnios(fecha = undefined) {
    if (fecha === undefined) return console.warn("Debe de ingresar una fecha valida");
    if (fecha instanceof Date) return console.error("El valor que ingresaste no es una fecha valida");

    const hoy = new Date();
    const aniosHoy = hoy.getFullYear();
    const fechaLimpia = new Date(fecha);
    const aniosFecha = fechaLimpia.getFullYear();

    let diferencia = aniosHoy - aniosFecha;

    return (diferencia === 0)
        ? console.info("Estamos en el año actual")
        : (diferencia === 1)
            ? console.info(`Ha pasado ${diferencia} año`)
            : console.info(`Han pasado ${diferencia} años`);
}

/*
calcularAnios();
calcularAnios({});
calcularAnios("2020-08-26");
calcularAnios(new Date());
calcularAnios(new Date(2020, 0, 1));
*/