// const apiKey = 'ODF7r7iJm23Bfns4YP4CIiulKJ4vYbgX';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         //console.log(data.images.original.url)

//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append( img );
//     })
//     .catch( console.warn )


// Usando async-await y try-catch se evita el uso de promises. El siguiente codigo es equivalente al del punto anterior.    

const getImagen = async() => {

    try {

        const apiKey = 'ODF7r7iJm23Bfns4YP4CIiulKJ4vYbgX';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
    } catch (error) {

        // manejo del error
        console.error(error);
    }
}

getImagen();