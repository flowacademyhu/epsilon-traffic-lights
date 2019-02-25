const cars = require('./randomCarGenerator');
const map = require('./map');

const move = (array) => { // array = a különböző autók
  for (let i = 0; i < array.length; i++) {
    if ((array[i][0] <= 14 || array[i][0] >= 16) && array[i][1] === 14) {
      moveSouth(array[i][0], array[i][1]); // délre mozgás crossroads előtt/után
    } else if ((array[i][0] >= 15 || array[i][0] <= 13) && array[i][1] === 15) {
      moveNorth(array[i][0], array[i][1]); // északra mozgás crossroads előtt/után
    } else if ((array[i][1] >= 15 || array[i][1] <= 13) && array[i][0] === 14) {
      moveWest(array[i][0], array[i][1]); // nyugatra mozgás crossroads előtt/után
    } else if ((array[i][1] <= 14 || array[i][1] >= 16) && array[i][0] === 15) {
      moveEast(array[i][0], array[i][1]); // keletre mozgás crossroads előtt/után
    } else if (array[i][0] === 14 && array[i][1] === 14 && array[i][2] === 4) {
      moveWest(array[i][0], array[i][1]); // bal felsőből nyugatra
    } else if (array[i][0] === 14 && array[i][1] === 14 && array[i][2] !== 4) {
      moveSouth(array[i][0], array[i][1]); // bal felsőből délre
    }
  }
};

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

move(cars.myCars);
