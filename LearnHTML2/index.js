
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

let name = "Mateo"; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let lastName = null; // clear the variable

console.log(typeof(name));
name = 30;
console.log(typeof(name));
console.log(typeof(lastName));

let person = {
    name: 'Mateo',
    age: 30     
};

console.log(person);

//Dot notation
person.name = 'Manaia';
console.log(person.name);

//Bracket notation
person['name'] = 'Mary';
console.log(person.name);