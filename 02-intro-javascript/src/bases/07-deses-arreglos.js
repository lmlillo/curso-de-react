
// Desestructuración de arreglos

// Tarea
// Nombre
// setNombre

const usarState = ( valor ) => {
    return [ valor, () => { console.log( "Hola mundo") } ];
}

const [ nombre, setNombre] = usarState('Pepe');
console.log(nombre);
setNombre();