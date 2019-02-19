let crossroads = require('./generateArray');

let car = 1;

function displayCar (array) {
  array = crossroads.fill();
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

function moveCar (array) {
  array = displayCar();
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (array[y][x] === car) {
        let temp = array[y][x]; // Kurvára nem működik....
        array[y][x] = array[y][x + 1];
        array[y][x + 1] = temp;
      }
    }
  }
}
console.log(moveCar());
