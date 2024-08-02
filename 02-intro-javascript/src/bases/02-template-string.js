
// Uso de template strings
// Es código javascript para concatenear strings
// Se usa mucho en React


const nombre = 'Luis';
const apellido = 'Lillo';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${ nombre } ${ apellido}`;

console.log( `
    ${nombre}
    ${apellido}
    ${1+1}
    `    
)

console.log( nombreCompleto );

// Se puede mezclar template strigns con la concatenación con el signo +
function getSaludo (nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo(nombre)}`)
