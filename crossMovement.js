let map = require ('./map');
function crossmovementLD (array) {
  if (array[15][14] === 1) {
    // délre el kell mozdítani
  } else {
    // keletre kell elmozdítani
  }
}

function crossmovementLR (array) {
  if (array[15][15] === 2) {
    let car = array[15][15];
    array[15][15] -= car;
    array[15][16] = car;
    // keletre kell elmozdíteni
  } else {
    let otherCar = array[15][15];
    array[15][15] -= otherCar;
    array[14][15] = otherCar;// északnak kell elmozdítani
  }
}

function crossmovementRU (array) {
  if (array[14][15] === 3) {
    // északra kell elmozdíteni
  } else {
    // nyugatra kell elmozdítani
  }
}

function crossmovementLU (array) {
  if (array[14][14] === 4) {
    // nyugatra kell elmozdíteni
  } else {
    // délre kell elmozdítani
  }
}
