const elements = {
    "featured-elements": ["a", "b", "c"],
};

// console.log(elements.featured);

// console.log(elements.[featured]); //not accessible

console.log(elements["featured-elements"]);

const element = {
    featured: ["a", "b"],

};

const key = "featured"
console.log(element[key]);