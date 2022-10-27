class User { // Declaracion de una clase
  
  // Metodos de clase
  greeting() {
    return `Hello my name is ${this.name}, and i speak as ${this.#speek()}`;
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }

  #speek() { //Metodo privado, solo puede ser accedido dentro de la clase
    return 'Mi sonido';
  }
}

const juanUser = new User('Juan', 18);
console.log(juanUser.greeting());
const pedroUser = new User('Pedro', 20);
console.log(pedroUser.greeting());

console.log(juanUser.uAge);
juanUser.age = 20;
juanUser.uAge = 25;
console.log(juanUser.uAge);