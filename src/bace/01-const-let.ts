const firstName = "Tony";//Siempre hacer uso de una constatante ya que se evitan problemas de que los valores cambien
const lastName = "StarK";

/*
Nota importante = el usar let cambia el valor, mientras que el const no,
Ya que es una constante.

Si quieres que tus variables tengan un typo definido se puede hacer 
Como hacer un {const a: string = 'Gladys'} donde se muestra que esta 
Variable es de tipo string, pero sino entonces la infiere que la variable
es Gladys ya que ese es el valor que se le dio, pero ya nosotros sabemos que es
De tipo string.
*/

export const fullName = `${firstName} ${lastName}`  // El export es para evitar que la variable colicione con otros con el mismo nombre, por eso es importante.


console.log({firstName, lastName})
console.log(`${firstName} ${lastName}`)

console.log(fullName)