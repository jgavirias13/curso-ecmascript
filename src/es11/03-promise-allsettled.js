const promise1 = new Promise((resolve, reject) => {
  reject(new Error('Funcion no implementada'));
});
const promise2 = new Promise((resolve, reject) => resolve('Finalizada promesa 2'));
const promise3 = new Promise((resolve, reject) => resolve('Finalizada promesa 3'));

//Como saber si todas las promesas han sido resueltas
Promise.allSettled([promise1, promise2, promise3]).then((response) => {
  console.log(response[0]);
  console.log(response[1]);
  console.log(response[2]);
})