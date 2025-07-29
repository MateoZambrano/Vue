
export const numberArray = [1,2,3,4,5];

numberArray.push(6);

const numberArray2 = [...numberArray];//Esta medida es para evitar que mute osea que el valor no se lleva a cabo en las dos array, al menos que sea nesesario
numberArray2.push(7);

/* En caso de querer un arreglo de numeros de tipo String y Int
   Se puede hacer de la siguiente manera. 
   
   Tambien hay que tener encunta que TypeScript tambien lo puede 
   inferir, como por ejem: {const numberArray = [1,2,'3',4,'5'];}.
   Entonces TypeScript lo puede inferir de la siguiente manera 
   const numberArray: (string | number)[].
 */

const numberArray3: (number|string)[] = [...numberArray]
numberArray3.push('8');

/* Ejercicio: Crea una array de n numeros y agrega un numero en cualquier posicion deseada*/

const a = 10;
const posicion = 3;

for (let i = numberArray.length; i > posicion ; i--){
    numberArray[i] = numberArray [i-1];
      
}

numberArray[posicion] = a;

console.log({numberArray})

console.log({numberArray, numberArray2, numberArray3});
