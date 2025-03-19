//2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.
const sumaArray = (array) => array {
   let suma= 0;
   for  ( let nume of aray) suma += nume;
   return suma;
}
console.log(sumaArray([3,7,2,9,5]));

//2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].
const encontrarelMayor = array => Math.max(...array)

console.log(encontrarelMayor([12, 45, 6, 89, 23]));

// 2.3: Filtrar los números menores a 10 del array [15, 3, 8, 12, 1].
const fitrarlosMenores = (array) => array.filtrar(num => num <10);
console.log (filtrarlosMenores([15, 3, 8, 12, 1]));
