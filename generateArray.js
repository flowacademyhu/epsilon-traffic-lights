let size = 30;

function main (size) {
  let array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = new Array(size);
  }
  return array;
}

function fill (array) {
  array = main(size);
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (y == 14 || y == 15 || x == 14 || x == 15) {
        array[y][x] = 0;
      } else if (y == 13 && x == 13 || y == 13 && x == 16 || y == 16 && x == 13 || y == 16 && x == 16) {
        array[y][x] = 'P';
      } else {
        array[y][x] = ' ';
      }
    }
  }
  return array;
}
module.exports = {
  fill,
  main
};
