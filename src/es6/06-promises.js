const anotherFunction = () => {
  return new Promise( (resolve, reject) => {
    console.log('Ejecutando funcion anonima');

    if (true) {
      resolve('Success');
    } else {
      reject('Unexpected Error');
    }
  });
}

anotherFunction().then((message) => {
  console.log(`Finalizada la ejecucion con mensaje: ${message}`);
}).catch((err) => {
  console.log(`Finalizada la ejecucion con error: ${err}`);
});