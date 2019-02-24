let map = require('./map');

let SouthCar = 1;
let EastCar = 2;
let NorthCar = 3;
let WestCar = 4;
let CarMovements = [];

function displayWestCar (array) {
  let carY = array.length / 2;
  let carX = 0;
  array[carY][carX] = EastCar;
  CarMovements.push([carY, carX, EastCar]);
  console.clear();
  return array;
}

// console.log(displayWestCar(map.map));

console.log(map.map);
