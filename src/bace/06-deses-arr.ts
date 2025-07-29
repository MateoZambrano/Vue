const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [g,v,t, g2, g3= 'Yamoshi'] = character;

const returnArray =() =>{
    return [123, 'ABC'] as const;// Esto es conosido como una Tupla
}

const [numbers, letters] = returnArray();

console.log(numbers,letters.toLocaleLowerCase())
