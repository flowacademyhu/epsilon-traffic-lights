const cars = require('./randomCarGenerator');
const map = require('./map');

const move = (array) => { // array = a különböző autók
  for (let i = 0; i < array.length; i++) {
    if ((array[i][0] <= 13 || array[i][0] >= 16) && array[i][1] === 14) {
      if (carRemove(array[i], array)) {
        moveSouth(array[i], map.map);
      } // délre mozgás crossroads előtt/után
    } else if ((array[i][0] >= 16 || array[i][0] <= 13) && array[i][1] === 15) {
      if (carRemove(array[i], array)) {
        moveNorth(array[i], map.map);
      } // északra mozgás crossroads előtt/után
    } else if ((array[i][1] >= 16 || array[i][1] <= 13) && array[i][0] === 14) {
      if (carRemove(array[i], array)) {
        moveWest(array[i], map.map);
      } // nyugatra mozgás crossroads előtt/után
    } else if ((array[i][1] <= 13 || array[i][1] >= 16) && array[i][0] === 15) {
      if (carRemove(array[i], array)) {
        moveEast(array[i], map.map);
      } // keletre mozgás crossroads előtt/után
    } else if (array[i][0] === 14 && array[i][1] === 14 && array[i][2] === 4) {
      moveWest(array[i], map.map); // bal felsőből nyugatra
    } else if (array[i][0] === 14 && array[i][1] === 14 && array[i][2] !== 4) {
      moveSouth(array[i], map.map); // bal felsőből délre
    } else if (array[i][0] === 15 && array[i][1] === 14 && array[i][2] === 1) {
      moveSouth(array[i], map.map); // bal alsóból délre
    } else if (array[i][0] === 15 && array[i][1] === 14 && array[i][2] !== 1) {
      moveEast(array[i], map.map); // bal alsóból keletre
    } else if (array[i][0] === 15 && array[i][1] === 15 && array[i][2] === 2) {
      moveEast(array[i], map.map); // jobb alsóból keletre
    } else if (array[i][0] === 15 && array[i][1] === 15 && array[i][2] !== 2) {
      moveNorth(array[i], map.map); // bal alsóból északra
    } else if (array[i][0] === 14 && array[i][1] === 15 && array[i][2] === 3) {
      moveNorth(array[i], map.map); // jobb felsőből északra
    } else if (array[i][0] === 14 && array[i][1] === 15 && array[i][2] !== 3) {
      moveWest(array[i], map.map); // jobb felsőből nyugatra
    }
  }
};

function moveEast (car, map) { // visz keletre függvény
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0]][car[1] + 1];
  map[car[0]][car[1] + 1] = temp; // megtörtént a csere
  car[1] += 1; // értéket növel
  return map; // friss mapot adja vissza
}

function moveSouth (car, map) {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0] + 1][car[1]];
  map[car[0] + 1][car[1]] = temp;
  car[0] += 1;
  return map;
}

function moveNorth (car, map) {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0] - 1][car[1]];
  map[car[0] - 1][car[1]] = temp;
  car[0] -= 1;
  return map;
}

function moveWest (car, map) {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0]][car[1] - 1];
  map[car[0]][car[1] - 1] = temp;
  car[1] -= 1;
  return map;
}

const carRemove = (car, carsArr) => {
  if (car[0] === 0 && car[1] === 15) {
    carsArr.slice(car); // északon távozó autót kiveszi a tömbből
    map.map[0][15] = 0;
    return false;
  } else if (car[0] === 29 && car[1] === 14) {
    carsArr.slice(car); // délen távozó autót kiveszi a tömbből
    map.map[29][14] = 0;
    return false;
  } else if (car[0] === 15 && car[1] === 29) {
    carsArr.slice(car); // keleten távozó autót kiveszi a tömbből
    map.map[15][29] = 0;
    return false;
  } else if (car[0] === 14 && car[1] === 0) {
    carsArr.slice(car); // nyugaton távozó autót kiveszi a tömbből
    map.map[14][0] = 0;
    return false;
  } else {
    return true;
  }
};

setInterval(function () { move(cars.myCars); }, 1000);

module.exports = { move, carRemove };
