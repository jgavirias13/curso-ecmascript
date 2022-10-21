async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const theGenerator = anotherGenerator();
theGenerator.next().then(response => console.log(response.value));
theGenerator.next().then(response => console.log(response.value));
theGenerator.next().then(response => console.log(response.value));
console.log('Se ha terminado de invocar el generator')

async function arrayOfNames(names) {
  for await (let value of names) {
    console.log(value);
  }
}

const names = arrayOfNames(['Juan', 'Oscar']);