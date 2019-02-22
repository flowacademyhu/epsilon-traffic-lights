function genArr (size) {
  let array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = new Array(size);
  }
  return array;
}
let lamp = 'P';
let road = 0;
let empty = '';
function buildMap (array) {
  array[13][13] = lamp;
  array[13][16] = lamp;
  array[16][13] = lamp;
  array[16][16] = lamp;

  return array;
}
let map = buildMap(genArr(30));

module.exports = { map };
