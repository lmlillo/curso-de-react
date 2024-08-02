

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "Ney York",
        zip: 553325644,
        lat: 14,3232,
        lng: 34,922633,
    }
};

//console.table( persona.nombre );

console.log( persona ); // Tony

const persona2 = persona; // Error: No hacer esta asignación nunca, hace referencia a la dirección de memoria a la que apunta el objeto

const persona2 = {...persona}; // Para clonar un objeto usar la funcion spread de ecma6 {...NombroObjeto}

persona2.nombre = "Peter"; 

console.log( persona ); // Peter
console.log( persona2 );// Peter
