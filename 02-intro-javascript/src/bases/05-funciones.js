

function saludar ( nombre ) {
    return `Hola ${ nombre }`;
}

const saludar2 = function( nombre ) {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar4= ( nombre ) => `Hola ${ nombre }`;

const saludar5= () => `Hola Mundo`;

console.log( saludar2('Luis'));
console.log( saludar('Miguel'));
console.log( saludar3('Lillo'));
console.log( saludar4('Marco'));
console.log( saludar5());

// Tarea
// 1. Transformar a una función flecha
// 2. Retornar un objeto implícito

// function getUsuarioActivo ( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }



const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );