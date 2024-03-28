const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];


//cumbersome way
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [a, b, c, d, e] = friends;

console.log(a, b, c, d, e);

//1st and last ta print korte chaile

const [a, , , , e] = friends;
console.log(a, e);