/** Ejercicios de Lógica de Programación (6-10) en JavaScript */

// 18. Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
const contarLetras = (cadena = undefined) => {
    if (cadena === undefined) return console.error("No ingreso cadena a procesar");
    if (typeof cadena !== "string") return console.warn(`El valor de ${cadena} no es una cadena de texto`);
    if (cadena.length === 0 || cadena === "") return console.warn("Ingrese una cadena");

    let vocales = 0, consonantes = 0;
    cadenaNormalizada = cadena.toLowerCase().split("");
    console.log(cadenaNormalizada);

    for (let letra of cadenaNormalizada) {
        if (/[aeiou]/gi.test(letra)) {
            vocales++;
        } else {
            if (/[^aeiouáéíóúü]/gi.test(letra)) {
                consonantes++;
            }
        }
    }

    return console.info(`La cadena "${cadena}" tiene ${vocales} vocales y ${consonantes} consonantes`);
}

/*
contarLetras();
contarLetras(2);
contarLetras("");
contarLetras("Cadenas");
*/

// 19. Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero
const validarNombre = (nombre = undefined) => {
    if (nombre === undefined) return console.error("No ingresaste un nombre a validar");
    if (typeof nombre !== "string") return console.error(`El valor de ${nombre} no es una cadena de texto`);
    if (nombre.length === 0 || nombre === "") return console.warn("Ingrese un nombre a validar");

    const regex = /^([A-Za-zÑñÁáÉéÍíÓóÚú.]+[\s'-]{0,1})+$/;
    return console.info(regex.test(nombre));
}
/*
validarNombre();
validarNombre("");
validarNombre(2);
validarNombre("José Fco Galicia");
*/

validarNombre("José Fco. Galicia");

//20. Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero
const validarEmail = (email = undefined) => {
    if (email === undefined) return console.error("No ingresaste un email a validar");
    if (typeof email !== "string") return console.warn(`El valor de ${email} no es una cadena de texto`);
    if (email.length === 0 || email === "") return console.warn("Ingrese un email a validar");

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return console.info(regex.test(email));
}

validarEmail();
validarEmail("");
validarEmail(2);
validarEmail("ejemplo@gmail.com")