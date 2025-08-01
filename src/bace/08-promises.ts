import { getHeroById } from "./07-imp-exp"
import type {Hero} from "./data/heroes"

// console.log('Inicio')


// /*
// Las Promise como su nombre lo indica es una promesa donde tiene
// unos parametros comunes como es el resolve es cuando esta resuelto 
// y reject cuando hay un problema.
// */

// new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//     //resolve('Mi amigo cumplio') el resolve solo se ejecuta una sola vez
//         reject('Mi amigo no cumplio')
//     }, 1000);
    
// }).then((message) => console.log(message))
// .catch((errorMessage) => console.log(errorMessage)) 
// .finally(()=> console.log('Fin de la promesa'))

// console.log('Fin')

const getHeroByAsync = (id : number):Promise<Hero> => {

    return new Promise((resolve, reject) =>{

        setTimeout(()=>{

         const hero = getHeroById(id);

         hero ? resolve(hero) : reject(`Hero no encontrado #${id}`);

        //  if(hero){
        //     resolve(hero)
        //     return;
        //  }//No es nesesario el else ya que con el return funciona de parada y esto se hace para optimizar codigo. 

        }, 1500);
    })

}

// getHeroByAsync(2)
//     .then(hero => console.log('El nombre es', hero.name))
//     //.catch(message =>alert(message) )
//     .catch(alert)

