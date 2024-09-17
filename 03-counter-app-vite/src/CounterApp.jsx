// Si se trabaja con vite hay que importar PropTypes. Vite tiene menos dependecias precargadas.
import PropTypes from 'prop-types';
// Importamos el primer hook
import { useState } from 'react';

// Props: En lugar de enviar props se envían los argurmentos desestructurados
export const CounterApp = ( { value } ) => {

    // if ( !title ) {
    //     throw new Error('title is required');
    // }

    // function handleAdd(event) { 
    //     console.log( event );
    // }

    const [ counter, setCounter ] = useState ( value );

    // Funciones flecha van más rápido
    // const handleAdd = (event, newValue) => { 
    const handleAdd = () => {         
        // console.log( event );
        // console.log( newValue );

        // Las dos lineas de abajo hacen lo mismo pero hay una diferencia:
        // 1: devuelve counter + 1
        // 2: devuelve nuevo valor del counter + 1
        setCounter( counter + 1);
        //setCounter( (c) => c + 1);
    }
    const handleSubstract = () => {         

       //setCounter( counter - 1);
        setCounter( (c) => c - 1);
    }
    const handleReset = () => {         

        setCounter( value );
        // setCounter( (c) => c + 1));
    }

    return (
        <>
            {/* <h1>Luis Lillo</h1> */}
            <h1>CounterApp</h1>
            {/* <h2> { value } </h2> */}
            <h2> { counter } </h2>
            {/* <button onClick= { (event) => handleAdd(event)}> Esta linea y la de abajo hacen lo mismo. No hace falta pasar el evento, viene intrinseco */}
            {/* <button onClick= { handleAdd }>  Si se quiere pasar otro valor diferente si que hay que referenciar el evento*/}
            
            <button onClick= { handleAdd }>
                +1
            </button>
            <button onClick= { handleSubstract }>
                -1
            </button>
            <button onClick= { handleReset }>
                Reset
            </button>

        </>
       
    )    
}

// Para validar los datos de nuestro componente se definen los tipos de props y si son obligatorios
// MyFirstApp.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.number
// }
CounterApp.propTypes = {
    value: PropTypes.number

}
// Console WARNING: Al parecer el soporte para el defaultProps se eliminará en una futura versión de React como te indica el warning que estás viendo. Para corregirlo, simplemente en lugar de usar el defaultProps, puedes usar parámetros por defecto directamente en la desestructuración de las props del componente, por ejemplo, podrías hacer algo como esto:

// export const FirstApp = ({ title = 'No hay título', subTitle = 'No hay subtítulo', name = 'Fernando Herrera' }) => {...}

CounterApp.defaultProps = {
    value: 27

}