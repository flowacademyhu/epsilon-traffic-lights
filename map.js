function genArr (size) {
  let array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = new Array(size);
  }
  return array;
}
let lamp = 'P';
let road = 0;
// let empty = ' ';
function buildMap (array) {
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      array[14][x] = road;
      array[15][x] = road;
      array[y][14] = road;
      array[y][15] = road;
      // array[y][x] = empty;
    }
  }
  array[13][13] = lamp;
  array[13][16] = lamp;
  array[16][13] = lamp;
  array[16][16] = lamp;
  array[2][18] = 'S';
  array[2][19] = 'c';
  array[2][20] = 'o';
  array[2][21] = 'r';
  array[2][22] = 'e';
  array[2][23] = ':';
  array[2][24] = 0;
  return array;
}
let map = buildMap(genArr(30));

module.exports = { map };
