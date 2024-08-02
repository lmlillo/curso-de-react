const activo = true;

let mensaje = '';

if( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

// Operador ternario. Se usa cuando solo hay una instruccion. Si activo es true, se ejecuta el primer caso, si no, el segundo
const mensaje2 = ( activo ) ? 'Activo' : 'Inactivo';

// Operador corto circuito. Se usa cuando solo hay una instruccion. Si activo es true devuelve el valor "Activo" pero si es false devuelve false
const mensaje3 = ( activo ) && 'Activo';

console.log( { mensaje, mensaje2, mensaje3 } )