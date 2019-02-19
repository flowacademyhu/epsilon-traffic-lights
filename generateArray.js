let size = 10;

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
      array[y][x] = 0;
    }
  }
  return array;
}
module.exports = {
  fill,
  main
};
