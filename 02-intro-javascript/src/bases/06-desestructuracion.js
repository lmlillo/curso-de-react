// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

// Esto es la destructuración. Para usar directamente el nombre de la variabla en lugar del ojeto.nombre. Se puede dar otro nombre a las propieddades(clave: superheroe por ejemplo).
//const { nombre, edad, clave: superheroe  } = persona;

// console.log( nombre ); // Tony
// console.log( edad ); // 45 
// console.log( superheroe ); // Ironman
// console.log( persona ); // Objeto persona

// Se usa sobre todo para pasarlo a funciones. Tambien se puede asignar un valor default para en el caso que no se pase ese parámetro (rango='capitan'). Si exite toma ese valor(Soldado).
const usaContento = ({ clave, nombre, edad, rango = 'Capitan'}) => {
    
    // console.log( rango ); //Soldado
    // console.log( persona );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.222,
            lng: -12.325
        }
    }
} 

// usaContento* No permite usar useContext. Parece que react lo tiene reservado
const { nombreClave, anios, latlng } = usaContento( persona );
// const { nombreClave, anios, latlng:{ lat, lng } } = Contento( persona ); // Tambien se puede anidar la desestructuración
const { lat, lng } = latlng;

console.log( nombreClave, anios);
console.log( latlng );
console.log( lat, lng );

