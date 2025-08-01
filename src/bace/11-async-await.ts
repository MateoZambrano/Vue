import type { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";


export const getImage = async () => { //Cuando agregamos el async lo que hace es retornarnos una promesa.
    try {
        const resp = await giphyApi.get<GIFResponse>('/random') //Cuando se usa el awit de una promesa tengo en su valor de retorno cuando la respuesta es exitosa, pero solo cuando es async no funciona si es una funcion normal.
        return resp.data.data.images.downsized_large.url;
    } catch (error) {
        throw 'url no encontrado'
    }
    
}

// Esta de aqui es una alternativa pero lo que hace es que haya mucho codigo que puede
// ser optimizado con la opcion de ariba, pero esta opcion se puede usar dependiendo del proyecto.
// export const getImagePromise = () => {
//     return new Promise(resolve =>{
//         resolve(`https://url-de-mi-sitio-web/image.jpg`)
//     });
// }

getImage()
    .then((url) => console.log({url})) //Lo que pasa es que en esta parte se ejecuta cuando ya tenemos nuestro codigo de manera asincrona.
    .catch(err => alert(err))