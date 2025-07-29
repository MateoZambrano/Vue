//function greetPerson (name: string){
//    return `Hola, ${ name }`;
//}

//const greetPerson = (name: string) => { Esta es una variacion de una funcion solo que se usa un const, por en vez de una function
//    return `Hola, ${name}`
//}

export const greetPerson = (name: string) => `Hola, ${name}`; //Esta es una funcion de flecha donde se puede reducir enormemente, pero en casos espesificos

//const getUser = ()=> {
//    return {
//        uid: 'ABC-123',
//        userName: 'Tony001'
//    }
//}

export const getUser = (uid:string) => ({
  //uid, Cuando se pasa por parametro el lenguaje ya infiere que tipo de propiedad es.
  uid: uid,
  userName: "Tony001",
});//Cuando se vea una funcion con flecha trata sobre un return implicito de un objeto


const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Fuerza'
    }
];

const hero = heroes.find( (h) => h.id === 2)

console.log(hero?.power?.toUpperCase())//Esto es un null check, lo que hace es que el codigo no estalle