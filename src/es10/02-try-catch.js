try {
  hello();
} catch (error) {
  console.log('En el catch');
  console.log(error);
}

function hello() {
  throw new Error('Error inesperado');
}

// nueva sintaxis

try {
  hello();
} catch { //Es opcional el uso del error
  console.log('Capturado un error');
}