import heroes, { type Owner } from "./data/heroes";

//import heroes from "./data/heroes"; Lo que estamos diciendo aqui es que exporte lo que sea que marca esta ruta y le ponga ese nombre eje.
//import misPersonajes from "./data/heroes"; En este caso va a funcionar de la misma manera ya que solo le cambie el nombre pero la ruta es la misma.

/*
import { owners } from "./data/heroes"; 
Esto es una exportacion independiente. 
 */

export const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id) // Nunca olvidarce de colocar return ya que si no lo ponemos estamos deciendo que traiga algo vacio.
}

export const getHeroByOwners = (owner: Owner)  => {
    return heroes.filter(hero => hero.owner === owner)
}

//(owners: 'DC' | 'Marvel') esto es util solamente cuando no se va ha expandir el script

/* 
Nota importante: Cuando usamos find solo estamos buscando un solo elemento,
pero cuando usamos filter podemos traer mas elementos ademas de filtrar los
elementos que no queremos.
*/



//console.log(getHeroByOwners('Shonen Jump'))