//Flat
const array = [1,1,2,3,1,3,1,121,3,4,5,32,5,64, [32,1,21,5,[9,87,12]]];
console.log(array.flat(3));

//Flatmap
const array2 = [1,1,21,34,23,15,522,654];
console.log(array2.flatMap((value) => [value, value * 2]));