let crossroads = require('./generateArray');

let NorthCar = 1;
let WestCar = 2;
let SouthCar = 3;
let EastCar = 4;

function displayWestCar (array) {
  array = crossroads.fill();
  let positionY = array.length / 2;
  let positionX = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (y === positionY && x === positionX) {
        array[y][x] = WestCar;
      }
    }
  }
  return array;
}
console.log(displayWestCar());

function moveWestCar ()