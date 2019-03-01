const gameOver = require('./manyCarsGameOver');

global.scoreNumber = 0;

const move = (array, backMap) => { // array = a különböző autók, backMap = "háttér" térkép
  if (backMap[13][16] === 'Z' && backMap[14][16] !== 0 && (backMap[15][15] !== 2 && backMap[15][15] !== 0)) {
    console.log('Game over. Crash in the northeast side of the crossroads.'); // jobb felső baleset
    console.log('Your score: ' + global.scoreNumber);
    process.exit(1);
  } else if (backMap[13][13] === 'Z' && backMap[13][14] !== 0 && (backMap[14][15] !== 3 && backMap[14][15] !== 0)) {
    console.log('Game over. Crash in the northwest side of the crossroads.'); // bal felső baleset
    console.log('Your score: ' + global.scoreNumber);
    process.exit(1);
  } else if (backMap[16][13] === 'Z' && backMap[15][13] !== 0 && (backMap[14][14] !== 4 && backMap[14][14] !== 0)) {
    console.log('Game over. Crash in the southwest side of the crossroads.'); // bal alsó baleset
    console.log('Your score: ' + global.scoreNumber);
    process.exit(1);
  } else if (backMap[16][16] === 'Z' && backMap[16][15] !== 0 && (backMap[15][14] !== 1 && backMap[15][14] !== 0)) {
    console.log('Game over. Crash in the northeast side of the crossroads.'); // jobb alsó baleset
    console.log('Your score: ' + global.scoreNumber);
    process.exit(1);
  }
  for (let i = 0; i < array.length; i++) { // autót vizsgál mozgásra
    if ((array[i][0] <= 13 || array[i][0] >= 16) && array[i][1] === 14) {
      if (carRemove(array[i], i, array, backMap)) {
        moveSouth(array[i], backMap);
      } // délre mozgás crossroads előtt/után
    } else if ((array[i][0] >= 16 || array[i][0] <= 13) && array[i][1] === 15) {
      if (carRemove(array[i], i, array, backMap)) {
        moveNorth(array[i], backMap);
      } // északra mozgás crossroads előtt/után
    } else if ((array[i][1] >= 16 || array[i][1] <= 13) && array[i][0] === 14) {
      if (carRemove(array[i], i, array, backMap)) {
        moveWest(array[i], backMap);
      } // nyugatra mozgás crossroads előtt/után
    } else if ((array[i][1] <= 13 || array[i][1] >= 16) && array[i][0] === 15) {
      if (carRemove(array[i], i, array, backMap)) {
        moveEast(array[i], backMap);
      } // keletre mozgás crossroads előtt/után
    } else if (array[i][0] === 14 && array[i][1] === 14 && array[i][2] === 4) {
      moveWest(array[i], backMap); // bal felsőből nyugatra
    } else if (array[i][0] === 14 && array[i][1] === 14 && array[i][2] !== 4) {
      moveSouth(array[i], backMap); // bal felsőből délre
    } else if (array[i][0] === 15 && array[i][1] === 14 && array[i][2] === 1) {
      moveSouth(array[i], backMap); // bal alsóból délre
    } else if (array[i][0] === 15 && array[i][1] === 14 && array[i][2] !== 1) {
      moveEast(array[i], backMap); // bal alsóból keletre
    } else if (array[i][0] === 15 && array[i][1] === 15 && array[i][2] === 2) {
      moveEast(array[i], backMap); // jobb alsóból keletre
    } else if (array[i][0] === 15 && array[i][1] === 15 && array[i][2] !== 2) {
      moveNorth(array[i], backMap); // bal alsóból északra
    } else if (array[i][0] === 14 && array[i][1] === 15 && array[i][2] === 3) {
      moveNorth(array[i], backMap); // jobb felsőből északra
    } else if (array[i][0] === 14 && array[i][1] === 15 && array[i][2] !== 3) {
      moveWest(array[i], backMap); // jobb felsőből nyugatra
    }
  }
  gameOver.gameOver(backMap);
};

function moveEast (car, map) {
  if (map[car[0]][car[1] + 1] === 0) {
    if (car[0] === 15 && car[1] < 13) {
      swapEast(car, map);
    } else if (car[0] === 15 && car[1] === 13 && map[16][13] === 'Z') {
      swapEast(car, map);
    } else if (car[0] === 15 && car[1] === 14 && car[2] !== 1) {
      swapEast(car, map);
    } else if (car[0] === 15 && car[1] === 15 && car[2] === 2) {
      swapEast(car, map);
    } else if (car[0] === 15 && car[1] > 15) {
      swapEast(car, map);
    }
  } return map;
}

function moveSouth (car, map) {
  if (map[car[0] + 1][car[1]] === 0) {
    if (car[0] < 13 && car[1] === 14) {
      swapSouth(car, map);
    } else if (car[0] === 13 && car[1] === 14 && map[13][13] === 'Z') {
      swapSouth(car, map);
    } else if (car[0] === 14 && car[1] === 14 && car[2] !== 4) {
      swapSouth(car, map);
    } else if (car[0] === 15 && car[1] === 14 && car[2] === 1) {
      swapSouth(car, map);
    } else if (car[0] > 15 && car[1] === 14) {
      swapSouth(car, map);
    }
  } return map;
}

function moveNorth (car, map) {
  if (map[car[0] - 1][car[1]] === 0) {
    if (car[0] > 16 && car[1] === 15) {
      swapNorth(car, map);
    } else if (car[0] === 16 && car[1] === 15 && map[16][16] === 'Z') {
      swapNorth(car, map);
    } else if (car[0] === 15 && car[1] === 15 && car[2] !== 2) {
      swapNorth(car, map);
    } else if (car[0] === 14 && car[1] === 15 && car[2] === 3) {
      swapNorth(car, map);
    } else if (car[0] < 14 && car[1] === 15) {
      swapNorth(car, map);
    }
  } return map;
}
function moveWest (car, map) {
  if (map[car[0]][car[1] - 1] === 0) {
    if (car[0] === 14 && car[1] > 16) {
      swapWest(car, map);
    } else if (car[0] === 14 && car[1] === 16 && map[13][16] === 'Z') {
      swapWest(car, map);
    } else if (car[0] === 14 && car[1] === 15 && car[2] !== 3) {
      swapWest(car, map);
    } else if (car[0] === 14 && car[1] === 14 && car[2] === 4) {
      swapWest(car, map);
    } else if (car[0] === 14 && car[1] < 14) {
      swapWest(car, map);
    }
  } return map;
}

const swapEast = (car, map) => {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0]][car[1] + 1];
  map[car[0]][car[1] + 1] = temp;
  car[1] += 1;
};

const swapSouth = (car, map) => {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0] + 1][car[1]];
  map[car[0] + 1][car[1]] = temp;
  car[0] += 1;
};
const swapNorth = (car, map) => {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0] - 1][car[1]];
  map[car[0] - 1][car[1]] = temp;
  car[0] -= 1;
};

const swapWest = (car, map) => {
  let temp = map[car[0]][car[1]];
  map[car[0]][car[1]] = map[car[0]][car[1] - 1];
  map[car[0]][car[1] - 1] = temp;
  car[1] -= 1;
};

const carRemove = (car, carIndex, carsArr, map) => { // autó, autó sorszáma, autók, "háttér" térkép
  if (car[0] === 0 && car[1] === 15) {
    carsArr.splice(carIndex, 1); // északon távozó autót kiveszi a tömbből
    map[0][15] = 0;
    global.scoreNumber += 1; // SCORE +1
    return false;
  } else if (car[0] === 29 && car[1] === 14) {
    carsArr.splice(carIndex, 1); // délen távozó autót kiveszi a tömbből
    map[29][14] = 0;
    global.scoreNumber += 1; // SCORE +1
    return false;
  } else if (car[0] === 15 && car[1] === 29) {
    carsArr.splice(carIndex, 1); // keleten távozó autót kiveszi a tömbből
    map[15][29] = 0;
    global.scoreNumber += 1; // SCORE +1
    return false;
  } else if (car[0] === 14 && car[1] === 0) {
    carsArr.splice(carIndex, 1); // nyugaton távozó autót kiveszi a tömbből
    map[14][0] = 0;
    global.scoreNumber += 1; // SCORE +1
    return false;
  } else {
    return true;
  }
};

module.exports = { move, carRemove };
