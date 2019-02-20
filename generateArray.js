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

// alaptömb
let finalarray = fill(main(size));

const lightnorth = (array) => {
  if (array[13][13] === 'P') {
    array[13][13] = 'Z';
    return true;
  } else {
    array[13][13] = 'P';
    return false;
  }
};

const lightwest = (array) => {
  if (array[16][13] === 'P') {
    array[16][13] = 'Z';
    return true;
  } else {
    array[16][13] = 'P';
    return false;
  }
};

const lightsouth = (array) => {
  if (array[16][16] === 'P') {
    array[16][16] = 'Z';
    return true;
  } else {
    array[16][16] = 'P';
    return false;
  }
};

const lighteast = (array) => {
  if (array[13][16] === 'P') {
    array[13][16] = 'Z';
    return true;
  } else {
    array[13][16] = 'P';
    return false;
  }
};

lightnorth(finalarray);

lightwest(finalarray);

lightsouth(finalarray);

lighteast(finalarray);

// "széppé" varázsolja a pályát
const print2D = (array) => {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      process.stdout.write(array[x][y] + '');
    }    console.log();
  }
};

print2D(finalarray);

module.exports = {
  fill,
  main,
  print2D
};
