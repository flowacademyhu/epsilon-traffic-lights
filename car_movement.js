// Ez kerül átírásra!
let crossroads = require('../generateArray');

let NorthCar = 1;
let WestCar = 2;
let SouthCar = 3;
let EastCar = 4;

function displayNorthCar (array) {
  array = crossroads.fill();
  let positionY = 0;
  let positionX = array.length / 2 - 1;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (y === positionY && x === positionX) {
        array[y][x] = NorthCar;
      }
    }
  }
  return array;
}
console.log(displayCar());

function moveNorthCar (array) {
  array = displayCar();
  let temp;
  for (let y = 0; y < array.length - 1; y++) {
    for (let x = 0; x < array[y].length; x++) {
      let yMax = array[y].length - 1;
      if (array[y][x] > array[y + 1][x]) {
        temp = array[y][x];
        array[y][x] = array[y + 1][x];
        array[y + 1][x] = temp;
        if (array[yMax][x] === NorthCar) {
          array[yMax][x] -= NorthCar;
        }
      }
    }
  }
  return array;
}
function displayWestCar (array) {
  array = crossroads.fill();
  let positionY = 0;
  let positionX = array.length / 2 - 1;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (y === positionY && x === positionX) {
        array[y][x] = WestCar;
      }
    }
  }
  return array;
}
function moveWestCar (array) {
  array = displayCar();
  let temp;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      let xMax = array[x].length - 1;
      if (array[y][x] > array[y][x + 1]) {
        temp = array[y][x];
        array[y][x] = array[y][x + 1];
        array[y][x + 1] = temp;
        if (array[y][xMax] === car) {
          array[y][xMax] -= car;
        }
      }
    }
  }
  return array;
}
