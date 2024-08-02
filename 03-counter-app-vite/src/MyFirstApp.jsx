import { Fragment } from "react";

// Esto da un error. Dos elementos tienen que tener un padre. React exige al menos retornar un nodo padre.
// export const MyFirstApp = () => {
//     return (
//         
//             <h1>Luis Lillo</h1>
//             <p>Hello</p>
//        
//     )    
// }

// Así se soluciona pero mete un div inutil que puede molestar
// export const MyFirstApp = () => {
//     return (
//         <div
//             <h1>Luis Lillo</h1>
//             <p>Hello</p>
//         </div>
//        
//     )    
// }

// Entonces se inventó Fragment pero es un coñazo tener que importarlo
// export const MyFirstApp = () => {
//     return (
//         <Fragment>
//             <h1>Luis Lillo</h1>
//             <p>Hello</p>
//         </Fragment>
//        
//     )    
// }

// Si las funciones no tienen ninguna dependencia del functional component ponerla fuera
// const newMessage = (objectMessage) => {
//     return objectMessage.age;
// }

// const objectMessage = {
//     message: 'Hello World!',
//     title: 'Luis Lillo',
//     age: 45
// }

// // Para agrupar sin importar Fragment usar <>, es un sinónimo de Fragment
// export const MyFirstApp = ( props ) => {
//     return (
//         <>
//             {/* <h1>Luis Lillo</h1> */}
//             <h1>{ props.title }</h1>
//             <p>Hello!</p>
//         </>
       
//     )    
// }

// const newMessage = (objectMessage) => {
//     return objectMessage.age;
// }

// const objectMessage = {
//     message: 'Hello World!',
//     title: 'Luis Lillo',
//     age: 45
// }

// Si se trabaja con vite hay que importar PropTypes. Vite tiene menos dependecias precagadas.
import PropTypes from 'prop-types';

// Props: En lugar de enviar props se envían los argurmentos desestructurados
export const MyFirstApp = ( { title, subTitle} ) => {

    // if ( !title ) {
    //     throw new Error('title is required');
    // }
    return (
        <>
            {/* <h1>Luis Lillo</h1> */}
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
        </>
       
    )    
}

// Para saber como funciona nuestro componente se definen los tipos de props y si son obligatorios
MyFirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}