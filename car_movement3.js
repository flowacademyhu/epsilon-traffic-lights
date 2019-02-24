let map = require('./map');

let SouthCar = 1;
let EastCar = 2;
let NorthCar = 3;
let WestCar = 4;
let carMovements = [];
let y;
let x;

function displayWestCar (array) {
  y = array.length / 2;
  x = 0;
  array[y][x] = EastCar;
  carMovements.push([y, x, EastCar]);
  return array;
}
function displayNorthCar (array) {
  y = 0;
  x = array.length / 2 - 1;
  array[y][x] = EastCar;
  carMovements.push([y, x, EastCar]);
  return array;
}
function displayEastCar (array) {
  y = array.length / 2 - 1;
  x = array.length - 1;
  array[y][x] = EastCar;
  carMovements.push([y, x, EastCar]);
  return array;
}
function displaySouthCar (array) {
  y = array.length - 1;
  x = array.length / 2;
  array[y][x] = EastCar;
  carMovements.push([y, x, EastCar]);
  return array;
}

function moveEast (array) {
  y = carMovements[0][0];
  x = carMovements[0][1];
  console.log(carMovements);
  array[y][x] -= EastCar;
  array[y][x + 1] = EastCar;
  carMovements[0][0] = y;
  carMovements[0][1] = x + 1;
  console.log(carMovements);
  return array;
}
console.log(displayEastCar(displayNorthCar(displaySouthCar(displayWestCar(map.map)))));
console.log(carMovements);
