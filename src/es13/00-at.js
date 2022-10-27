const numbersText = ["one", "two", "three", "four", "five", "six"];

//Antes de es13
let sizeOfArray = numbersText.length;
console.log(`Last element ${numbersText[sizeOfArray-1]}`);

//Ahora con es13
console.log(`Last element ${numbersText.at(-1)}`);