//Antes de ES6
function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 20;
  var country = country || 'Colombia';

  console.log(name, age, country);
}

newUser('Juan'); //Los parametros restantes son asignados por defecto

//Con ES6
function newAdmin(name = 'Pablo', age = 30, country = 'China') { //Sintaxis mas amigable
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana');