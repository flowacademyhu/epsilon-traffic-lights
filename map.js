function genArr (size) {
  let array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = new Array(size);
  }
  return array;
}
let lamp = 'P';
let road = 0;
let empty = ' ';
function buildMap (array) {
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      array[14][x] = road;
      array[15][x] = road;
      array[y][14] = road;
      array[y][15] = road;
      array[y][x] = empty;
    }
  }
  array[13][13] = lamp;
  array[13][16] = lamp;
  array[16][13] = lamp;
  array[16][16] = lamp;
  array[11][0] = 4;
  array[12][0] = 4;
  array[17][0] = 4;
  array[18][0] = 4;
  array[0][11] = 3;
  array[0][12] = 3;
  array[0][17] = 3;
  array[0][18] = 3;
  array[11][29] = 2;
  array[12][29] = 2;
  array[17][29] = 2;
  array[18][29] = 2;
  array[29][11] = 1;
  array[29][12] = 1;
  array[29][17] = 1;
  array[29][18] = 1;
  return array;
}
let map = buildMap(genArr(30));

module.exports = { map };
