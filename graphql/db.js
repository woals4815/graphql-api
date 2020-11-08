export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "male"
    },
    {
        id: "1",
        name: "fuck",
        age: 23,
        gender: "female"
    },
    {
        id: "2",
        name: "slut",
        age: 21,
        gender: "female"
    },
    {
        id: "3",
        name: "pussy",
        age: 25,
        gender: "female"
    },
    {
        id: "4",
        name: "dickhead",
        age: 32,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};