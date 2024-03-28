const people = [{
        name: "bob",
        age: 20,
        position: "developer",
    },
    {
        name: "anna",
        age: 25,
        position: "designer",
    },
    {
        name: "susy",
        age: 30,
        position: "the boss",
    },
    {
        name: "john",
        age: 26,
        position: "intern",
    },
];

const getAges = (person) => person.age;

const ages = people.map((element) => {
    return element.age;
});

console.log(ages);

const newPeople = people.map((person, index) => {
    console.log(index);
    return person.age;
});

console.log(newPeople);

const newObject = people.map((person, index) => {
    return {
        firstName: person.name.toUpperCase(),
        age: person.age + 20,
    };
});

console.log(newObject);


const names = people.map((person) => `<h2>${person.name}</h2>`);

const result = document.querySelector("#result");
result.innerHTML = names.join("");

//console.log(names);