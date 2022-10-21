//Ahora se admite el uso de rest y spread para objetos

const user = {
  username: 'jgaviria',
  age: 27,
  country: 'CO'
};

const {username, ...values} = user; //Las demas propiedades van a la constante values como pares clave valor

console.table(values);