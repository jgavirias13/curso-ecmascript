const expresion = /\b(Apple)+\b/g;

const fruits = 'Banana, Orange, Apple, Kiwi, Banana, Banana, Apple';

for (const fruit of fruits.matchAll(expresion)){
  console.log(fruit);
}