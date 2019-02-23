let map = require('./map');

function design (array) {
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y]; x++) {
      if (array[y][x] == 0) { // úttest
        array[y][x] = '░';
      } else if (array[y][x] === 2) { // keletre tartó autó
        array[y][x] = '»';
      } else if (array[y][x] === 4) { // nyugatra tartó autó
        array[y][x] = '«';
      } else if (array[y][x] === 3) { // északnak tartó autó
        array[y][x] = '╠';
      } else if (array[y][x] === 1) { // délre tartó autó
        array[y][x] = '╣';
      }
    }
  } return array;
}