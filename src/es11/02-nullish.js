const anotherNumber = 1;
const validate = anotherNumber ?? 5; //Doble ?? pregunta si es nulo, si es nulo asigna el valor luego del operador
console.log(validate);

const newExample = null;
const validate2 = newExample ?? 8;
console.log(validate2);