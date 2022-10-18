// enhanced object literals

function newUser(user, age, country) { // Forma anterior de realizarlo
  return {
    user: user,
    age: age,
    country: country
  }
}

function newUserEs6(user, age, country) {
  return {  // Se asigna de acuerdo al nombre de la variable
    user,
    age,
    country
  }
}

console.log(newUser('Juan', 18, 'CO'));
console.log(newUserEs6('Manu', 27, 'MX'));