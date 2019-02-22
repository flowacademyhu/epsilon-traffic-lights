let crossroads = require('./generateArray');

let SouthCar = 1;
let EastCar = 2;
let NorthCar = 3;
let WestCar = 4;
let CarMovements = [];

function displayWestCar (array) {
  let positionY = array.length / 2;
  let positionX = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (y === positionY && x === positionX) {
        array[y][x] = EastCar;
        CarMovements.push([y, x, EastCar]);
        console.log(CarMovements);
      }
    }
  }
  return array;
}
console.log(displayWestCar(crossroads.()));

function moveEast (array, x, y) {
  array[x][y] -= EastCar;
  array[x][y + 1] = EastCar;
  return array;
}
moveEast();
console.log(CarMovements);
