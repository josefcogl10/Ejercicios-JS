/* Ejercicios de Lógica de Programación (9-10) */

/*
    27. Programa una clase llamada Pelicula.

    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, 
        director, año de estreno, país o países de origen, géneros y calificación en IMBD.

        * Todos los datos del objeto son obligatorios.
        * Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los  7 restantes números.
        * Valida que el título no rebase los 100 caracteres.
        * Valida que el director no rebase los 50 caracteres.
        * Valida que el año de estreno sea un número entero de 4 dígitos.
        * Valida que el país o paises sea introducidos en forma de arreglo.
        * Valida que los géneros sean introducidos en forma de arreglo.
        * Valida que los géneros introducidos esten dentro de los géneros aceptados*.
        * Crea un método estático que devuelva los géneros aceptados*.
        * Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
            * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family,
            Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, 
            Short, Sport, Talk-Show, Thriller, War, Western.
        * Crea un método que devuelva toda la ficha técnica de la película.
        * Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada 
            e imprime la ficha técnica de cada película.
*/

class Pelicula {
    static generosAceptados() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family",
            "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi",
            "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    constructor({ id, titulo, director, anioEstreno, paisOrigen, generos, calificacion }) {
        if (!id || typeof id !== "string" || !/^([a-z]{2})([0-9]{7})$/.test(id)) {
            throw new Error("El id debe ser una cadena de 9 caracteres: 2 letras + 7 números");
        }
        if (!titulo || typeof titulo !== "string" || titulo.length >= 100) {
            throw new Error("El titulo es obligatorio y debe ser menor a 100 caracteres");
        }
        if (!director || typeof director !== "string" || director.length >= 50) {
            throw new Error("El director es obligatorio y debe ser menor a 50 caracteres");
        }
        if (!anioEstreno || typeof anioEstreno !== "number" || !/^[0-9]{4}$/.test(anioEstreno)) {
            throw new Error("El año de estreno debe ser un número de 4 dígitos");
        }
        if (!paisOrigen || !Array.isArray(paisOrigen) || paisOrigen.length === 0) {
            throw new Error("El país de origen debe ser un arreglo con al menos un país");
        }
        for (let e of paisOrigen) {
            if (typeof e !== "string") {
                throw new Error("Los valores del arreglo de paises debe ser string");
            }
            if (e === "") {
                throw new Error(`El valor de ${e} del arreglo de paises no puede estar vacío`);
            }
        }
        if (!generos || !Array.isArray(generos) || generos.length === 0) {
            throw new Error("El arreglo de géneros no puede estar vacío");
        }
        for (let genero of generos) {
            if (typeof genero !== "string" || !Pelicula.generosAceptados().includes(genero)) {
                throw new Error(`El género "${genero}" no es válido`);
            }
        }
        if (calificacion === undefined || typeof calificacion !== "number") {
            throw new Error("La calificación debe ser un número");
        }

        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.paisOrigen = paisOrigen;
        this.generos = generos;
        this.calificacion = calificacion;
    }

    get fichaTecnica() {
        return {
            id: this.id,
            titulo: this.titulo,
            director: this.director,
            anioEstreno: this.anioEstreno,
            paisOrigen: this.paisOrigen,
            generos: this.generos,
            calificacion: this.calificacion
        };
    }
}


const peliculas = [
    {
        id: "tt1234567",
        director: "Christopher Nolan",
        titulo: "Inception",
        anioEstreno: 2010,
        paisOrigen: ["Estados Unidos", "Reino Unido"],
        generos: ["Thriller"],
        calificacion: 8.8
    },
    {
        id: "tt7654321",
        director: "Hayao Miyazaki",
        titulo: "El viaje de Chihiro",
        anioEstreno: 2001,
        paisOrigen: ["Japon"],
        generos: ["Animation", "Fantasy"],
        calificacion: 8.6
    },
    {
        id: "tt2468135",
        director: "Guillermo del Toro",
        titulo: "El laberinto del fauno",
        anioEstreno: 2006,
        paisOrigen: ["España", "México"],
        generos: ["Drama"],
        calificacion: 8.2
    }
];


const instancias = peliculas.map(p => new Pelicula(p));

// Imprimir la ficha técnica de cada película
instancias.forEach(p => console.info(p.fichaTecnica));