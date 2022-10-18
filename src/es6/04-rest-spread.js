//Desestructuracion

//Con Arrays
let fruits = ['Apple', 'Banana', 'Mandarina'];
let [a, b] = fruits; //Se asignan los dos primeros elementos a las variables a y b
console.log(a, b);

//Con objetos
let user = {
  username: 'jgaviria',
  age: '20',
  fullName: 'Juan Pablo'
}

let {username, fullName} = user;
console.log(username, fullName);

// Spread operator

let person = {
  name: 'Juan',
  age: 28
};

let country = 'CO';

let data = {id: 1, ...person, country}; // Se realiza la desestructuración de person

console.log(data);

// Rest parameters

function sum(num, ...values) { //Values sera una serie de parametros
  console.log(values);
}

sum(1);
sum(1,2,3,4,5); 