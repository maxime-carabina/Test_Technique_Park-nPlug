function filterPerAge(arr) {
    let adults = arr.filter(person => {
        return person.age > 18 ? person.name : null;
    });

    let getNames = adults.map(person => person.name);

    return getNames;
}

let people = [
    { name: 'John', age: 21 },
    { name: 'Jane', age: 22 },
    { name: 'Jack', age: 21 },
    { name: 'Jill', age: 15 },
    { name: 'Jenny', age: 18 }
];

console.log(filterPerAge(people));