

// Variables y constantes

const nombre = 'Fernando'; 
const apellido = 'Herrera';

let varlorDado = 5;
varlorDado = 4;

console.log( nombre, apellido, varlorDado );

// var No se debe usar ya mas, -> const para valores que no se espera que cambie, let para valores dinámicos
if ( true ) {
    const nombre = 'Peter';
    let varlorDado = 3;
    console.log( nombre, varlorDado);
}

console.log( varlorDado); // 4