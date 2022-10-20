const es6Async = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => resolve('Finalizada funcion async'), 2000)
    : reject(new Error('Error inesperado'));
  })
}

const es8Function = async () => {
  const finished = await es6Async();
  console.log(finished);
  console.log('ES8 Finished');
}

es8Function();
console.log('Funcion invocada');