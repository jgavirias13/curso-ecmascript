const promise1 = new Promise((resolve, reject) => {
  reject(new Error('Funcion no implementada'));
});
const promise2 = new Promise((resolve, reject) => resolve('Finalizada promesa 2'));
const promise3 = new Promise((resolve, reject) => resolve('Finalizada promesa 3'));

//Se realizará la ejecucion de la primera de las promesas en finalizar
Promise.any(promise1, promise2, promise3).then(response => console.log(response));