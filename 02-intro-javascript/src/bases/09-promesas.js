import { getHeroeById } from "./bases/08-import-export";
import heroes from "./data/heroes";

// const promesa = new Promise( ( resolve, reject ) => {

//     setTimeout( () => {
//         //resolve('Hola Mundo');
//         const heroe = getHeroeById( 2 );
//         console.log(heroe);
//         //resolve( heroe );
//         reject('No se pudo encontrar el héroe');
//     }, 2000 );
// });

// promesa.then( ( mensaje ) => {
//     console.log('heroe: ', mensaje);
// })
// .catch( err => console.warn( err ) );


const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            //resolve('Hola Mundo');
            const heroe = getHeroeById( id );
            console.log(heroe);
            heroe ? resolve( heroe ) : reject('No se pudo encontrar el hegroe');
            //resolve( heroe );
            //reject('No se pudo encontrar el héroe');
        }, 2000 )
    });
}

// getHeroeByIdAsync(10)
//     .then( heroe => console.log('heroe: ', heroe) )
//     .catch( err => console.warn( err ) );




getHeroeByIdAsync(4)
    .then( console.log )
    .catch( console.warn );
