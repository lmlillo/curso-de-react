//import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';

//console.table( heroes );

/* find() devuelve el primer elemento que cumple la condición */
export const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}

//console.log( getHeroeById( 3 ) );

/* filter() devuelve un arreglo con todos los elementos que cumplan la condición */
export const getHeroeByOwner = ( owner ) => {
    return heroes.filter( ( heroe ) => heroe.owner === owner );
}

//console.log( getHeroeByOwner( 'DC' ) );