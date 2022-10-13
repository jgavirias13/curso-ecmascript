var lastName = 'David'; //Declaracion con asignacion
lastName = 'Gaviria'; //Reasignacion
console.log(lastName);

let firstName = 'Juan'; //Nueva forma de declarar variables con let (contexto local)
firstName = 'Pablo';
console.log(firstName);

const fruit = 'Apple';
//fruit = 'Banana'; //Error, const no permite una reasignacion
console.log(fruit);

const getFruits = () => {
  if (true) {
    let fruit1 = 'Banana'; //Solo es accesible en el bloque del if block scope
    const fruit2 = 'Apple'; //Solo es accesible en el bloque del if block scope
    var fruit3 = 'Orange'; //Accesible en function scope
  }

  //console.log(fruit1); //Error, fruit 1 no esta definido - esta dentro del if
  //console.log(fruit2); //Error, fruit 2 no esta definido - esta dentro del if
  console.log(fruit3); //Unica opcion valida
}

getFruits();
