function* iterate(array) { // El * indica que es un generator
  for (let value of array) {
    yield value;
  }
}

const iterator = iterate(['Juan', 'Miguel', 'William', 'Diego', 'Carlos', 'Oscar']);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); // Undefined al no haber un proximo valor