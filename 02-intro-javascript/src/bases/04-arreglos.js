
// Arreglos en JS

// const arreglo = new Array( 100 ); Usar unicamente para para determinar el numero de posiciones del array especificando un número. Hacer siempre lo siguiente:

const arreglo = [1, 2, 3, 4];
// arreglo.push(1); No usar push
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo , 5]; //Usar spread para copiar. 

const arreglo3 = arreglo2.map( function(numero){
    return numero*2; // map crea un nuevo arreglo manipulando cada uno de los elementos de arreglo2. En este caso multiplica cada elemento por 2. La callback function es obligatoria usarla(function(numero)).
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );


// (4) [1, 2, 3, 4]
// (5) [1, 2, 3, 4, 5]
// (5) [2, 4, 6, 8, 10]