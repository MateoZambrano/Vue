interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}
/*
 Nota importante:
 interface se utiliza para definir la estructura que debe tener un objeto, 
 especificando cuáles propiedades y métodos debe tener, así como sus tipos. 
 Funciona como un "contrato" que otros objetos, funciones o clases deben cumplir 
 para que el código sea más seguro y legible
*/


export const person:Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman'
//  power: 'Money'
}

//const { age, name, power = 'No tiene super poder' } = person; //Puede ser un obj o un array
//console.log({age, name, power})

/*

const createHero = ({name, age, codeName, power}: any) => ({ // Es una funcion de flecha con un return implicito.
    id: 123456,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder' // el doble (??) es una nueva forma de evaluar si es nulo o usar este valor 
});

Forma optimizada:

const createHero = (args:any) => ({ // Es una funcion de flecha con un return implicito.
    id: 123456,
    name: args.name,
    age: args.age,
    codeName: args.codeName,
    power: args.power ?? 'No tiene poder' // el doble (??) es una nueva forma de evaluar si es nulo o usar este valor 
});

Esto es basicamente lo mismo solo que con valores, posible problemas de hacerlo de esta forma es que 
el desarrollador se coma una letra y aparesca un error de sintaxis
*/

interface CreateHeroArgs {
    name: string,
    age: number,
    codeName: string,
    power?: string
}

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({ // Es una funcion de flecha con un return implicito.
    id: 123456,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder' // el doble (??) es una nueva forma de evaluar si es nulo o usar este valor 
});



console.log(createHero(person))