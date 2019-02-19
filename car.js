let crossroads = require('./generateArray');

let car = 1;

function displayCar (array) {
  array = crossroads.main.fill;
  let positionY = array.length / 2;
  let positionX = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (y === positionY && x === positionX) {
        array[y][x] = car;
      }
    }
  }
  return array;
}
console.log(displayCar());
