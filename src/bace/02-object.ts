export const person = {
    lastName: 'Stark',
    age: 45,
    address:{
        city: 'New York',
        zip: 51323,
        lat: 14.23232,
        lng: 34.322323
    }
};// as const; Al momento de poner esta resticcion, estamos diciendo que ahora sus valores son de tipo Const o constante.

/*
Nota importante: 
Apesar de que sea un objeto constante 
si podemos cambiar sus valores osea lo que contiene lo que si 
no podemos hacer es redifinirlo como un objeto distinto como por 
ejemplo: persona = animal.

Lo que se quiere decir con esto es que son dos objetos completamente 
distintos
*/ 

//const person2 = person;
//En este caso lastName se cambian en ambas, debido a que se esta aplicando por referencia.


//Nota: todos los objetos de javaScrip se pasan por referencia 

//Entonces para clonar se usa el valor spread que son basicamente tres puntos

//const person2 = {...person}
//Se esta realizando una copia, pero no es de todo util

const person2 = structuredClone(person);
//De esta dorma se clona el objeto total mente, respentando los valores originales

person2.lastName = 'Parker';
person2.address.city = 'Colombia';

console.log({person});
console.log({person2});


