const cars = require('./randomCarGenerator');
const map = require('./map');

// PIMPELNI!!!!!!!!!!!!!!!! ADNI HOZZÁ + map PARAMÉTERT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const move = (array) => { // array = a különböző autók,
  if (map.map[13][16] === 'Z' && map.map[14][16] !== 0 && (map.map[15][15] !== 2 && map.map[15][15] !== 0)) {
    console.log('1'); // jobb felső baleset
    process.exit(1);
  } else if (map.map[13][13] === 'Z' && map.map[13][14] !== 0 && (map.map[14][15] !== 3 && map.map[14][15] !== 0)) {
    console.log('2'); // bal felső baleset
    process.exit(1);
  } else if (map.map[16][13] === 'Z' && map.map[15][13] !== 0 && (map.map[14][14] !== 4 && map.map[14][14] !== 0)) {
    console.log('G3333'); // bal alsó baleset
    process.exit(1);
  } else if (map.map[16][16] === 'Z' && map.map[16][15] !== 0 && (map.map[15][14] !== 1 && map.map[15][14] !== 0)) {
    console.log('4'); // jobb alsó baleset
    process.exit(1);
  }
  for (let i = 0; i < array.length; i++) { // autót vizsgál mozgásra
    if ((array[i][0] <= 13 || array[i][0] >= 16) && array[i][1] === 14) {
      if (carRemove(array[i], i, array)) {
        moveSouth(array[i], map.map);
      } // délre mozgás crossroads előtt/után
    } else if ((array[i][0] >= 16 || array[i][0] <= 13) && array[i][1] === 15) {
      if (carRemove(array[i], i, array)) {
        moveNorth(array[i], map.map);
      } // északra mozgás crossroads előtt/után
    } else if ((array[i][1] >= 16 || array[i][1] <= 13) && array[i][0] === 14) {
      if (carRemove(array[i], i, array)) {
        moveWest(array[i], map.map);
      } // nyugatra mozgás crossroads előtt/után
    } else if ((array[i][1] <= 13 || array[i][1] >= 16) && array[i][0] === 15) {
      if (carRemove(array[i], i, array)) {
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

function moveEast (car, map) {
  if (map[car[0]][car[1] + 1] === 0) {
    if (car[0] === 15 && car[1] < 13) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] + 1];
      map[car[0]][car[1] + 1] = temp; // megtörtént a csere
      car[1] += 1; // értéket növel
      return map; // friss mapot adja vissza
    } else if (car[0] === 15 && car[1] === 13 && map[16][13] === 'Z') {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] + 1];
      map[car[0]][car[1] + 1] = temp; // megtörtént a csere
      car[1] += 1; // értéket növel
      return map; // friss mapot adja vissza
    } else if (car[0] === 15 && car[1] === 14 && car[2] !== 1) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] + 1];
      map[car[0]][car[1] + 1] = temp; // megtörtént a csere
      car[1] += 1;
      return map;
    } else if (car[0] === 15 && car[1] === 15 && car[2] === 2) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] + 1];
      map[car[0]][car[1] + 1] = temp; // megtörtént a csere
      car[1] += 1;
      return map;
    } else if (car[0] === 15 && car[1] > 15) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] + 1];
      map[car[0]][car[1] + 1] = temp; // megtörtént a csere
      car[1] += 1;
      return map;
    }
  } return map;
}

function moveSouth (car, map) {
  if (map[car[0] + 1][car[1]] === 0) {
    if (car[0] < 13 && car[1] === 14) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] + 1][car[1]];
      map[car[0] + 1][car[1]] = temp;
      car[0] += 1;
      return map;
    } else if (car[0] === 13 && car[1] === 14 && map[13][13] === 'Z') {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] + 1][car[1]];
      map[car[0] + 1][car[1]] = temp;
      car[0] += 1;
      return map;
    } else if (car[0] === 14 && car[1] === 14 && car[2] !== 4) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] + 1][car[1]];
      map[car[0] + 1][car[1]] = temp;
      car[0] += 1;
      return map;
    } else if (car[0] === 15 && car[1] === 14 && car[2] === 1) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] + 1][car[1]];
      map[car[0] + 1][car[1]] = temp;
      car[0] += 1;
      return map;
    } else if (car[0] > 15 && car[1] === 14) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] + 1][car[1]];
      map[car[0] + 1][car[1]] = temp;
      car[0] += 1;
      return map;
    }
  }
}

function moveNorth (car, map) {
  if (map[car[0] - 1][car[1]] === 0) {
    if (car[0] > 16 && car[1] === 15) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] - 1][car[1]];
      map[car[0] - 1][car[1]] = temp;
      car[0] -= 1;
      return map;
    } else if (car[0] === 16 && car[1] === 15 && map[16][16] === 'Z') {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] - 1][car[1]];
      map[car[0] - 1][car[1]] = temp;
      car[0] -= 1;
      return map;
    } else if (car[0] === 15 && car[1] === 15 && car[2] !== 2) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] - 1][car[1]];
      map[car[0] - 1][car[1]] = temp;
      car[0] -= 1;
      return map;
    } else if (car[0] === 14 && car[1] === 15 && car[2] === 3) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] - 1][car[1]];
      map[car[0] - 1][car[1]] = temp;
      car[0] -= 1;
      return map;
    } else if (car[0] < 14 && car[1] === 15) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0] - 1][car[1]];
      map[car[0] - 1][car[1]] = temp;
      car[0] -= 1;
      return map;
    }
  }
}
function moveWest (car, map) {
  if (map[car[0]][car[1] - 1] === 0) {
    if (car[0] === 14 && car[1] > 16) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] - 1];
      map[car[0]][car[1] - 1] = temp;
      car[1] -= 1;
      return map;
    } else if (car[0] === 14 && car[1] === 16 && map[13][16] === 'Z') {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] - 1];
      map[car[0]][car[1] - 1] = temp;
      car[1] -= 1;
      return map;
    } else if (car[0] === 14 && car[1] === 15 && car[2] !== 3) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] - 1];
      map[car[0]][car[1] - 1] = temp;
      car[1] -= 1;
      return map;
    } else if (car[0] === 14 && car[1] === 14 && car[2] === 4) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] - 1];
      map[car[0]][car[1] - 1] = temp;
      car[1] -= 1;
      return map;
    } else if (car[0] === 14 && car[1] < 14) {
      let temp = map[car[0]][car[1]];
      map[car[0]][car[1]] = map[car[0]][car[1] - 1];
      map[car[0]][car[1] - 1] = temp;
      car[1] -= 1;
      return map;
    }
  } return map;
}

const carRemove = (car, carIndex, carsArr) => {
  if (car[0] === 0 && car[1] === 15) {
    carsArr.splice(carIndex, 1); // északon távozó autót kiveszi a tömbből
    map.map[0][15] = 0;
    map.map[2][24] += 1; // SCORE +1
    return false;
  } else if (car[0] === 29 && car[1] === 14) {
    carsArr.splice(carIndex, 1); // délen távozó autót kiveszi a tömbből
    map.map[29][14] = 0;
    map.map[2][24] += 1; // SCORE +1
    return false;
  } else if (car[0] === 15 && car[1] === 29) {
    carsArr.splice(carIndex, 1); // keleten távozó autót kiveszi a tömbből
    map.map[15][29] = 0;
    map.map[2][24] += 1; // SCORE +1
    return false;
  } else if (car[0] === 14 && car[1] === 0) {
    carsArr.splice(carIndex, 1); // nyugaton távozó autót kiveszi a tömbből
    map.map[14][0] = 0;
    map.map[2][24] += 1; // SCORE +1
    return false;
  } else {
    return true;
  }
};

setInterval(function () { move(cars.myCars); }, 1000);

module.exports = { move, carRemove };
