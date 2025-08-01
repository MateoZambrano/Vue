export interface Hero {
    id: number;
    name: string;
    owner: Owner;
};

/*
Cuando hablamos de objetos es bueno usar interface, pero para hacer 
valores tipados es bueno usar Type, aunque el interface y Type
al dia de hoy ya son lo mismo.
*/

export type Owner = 'DC' | 'Marvel' | 'Shonen Jump'


const heroes: Hero[]=[
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
    {
        id: 6,
        name: 'One Piece',
        owner: 'Shonen Jump'
    }
];


export const owners = ['DC','Marvel', 'Shonen Jump'] as const;

export default heroes; 