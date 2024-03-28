const people = [{
        // friend : ["kuddus" , "kholil"],
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

//based on condition
//find e ekta object return krbe
//filter a an array of objects return krbe

const youngPeople = people.filter((person) => {
    // if (person.age < 25) {
    //     return person;
    // }

    return person.age <= 25;

});

console.log(youngPeople);

const youngPeople2 = people.find((person) => person.name == "john");
console.log(youngPeople2);