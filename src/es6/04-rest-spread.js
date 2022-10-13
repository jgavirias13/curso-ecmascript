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