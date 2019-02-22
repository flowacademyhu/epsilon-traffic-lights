let finalarray = require('./main');
let print2D = require('./generateArray');

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
      }
    }
  }
  return array;
}
print2D.print2D(displayWestCar(finalarray.finalarray));

function moveEast (array, y, x, EastCar) {
  array[y][x] -= EastCar;
  array[y][x + 1] = EastCar;
  CarMovements[0] = [x, y + 1, EastCar];
  return array;
}
// moveEast(displayWestCar(finalarray.finalarray), CarMovements[0][0], CarMovements[0][1], CarMovements[0][2]);
