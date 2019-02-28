function lightswitch (i, array) {
  switch (i) {
    case 1:
      if (array[13][13] === 'P') {
        array[13][13] = 'Z';
        return array;
      } else {
        array[13][13] = 'P';
        return array;
      }
    case 2:
      if (array[16][16] === 'P') {
        array[16][16] = 'Z';
        return array;
      } else {
        array[16][16] = 'P';
        return array;
      }
    case 3:
      if (array[16][13] === 'P') {
        array[16][13] = 'Z';
        return array;
      } else {
        array[16][13] = 'P';
        return array;
      }
    case 4:
      if (array[13][16] === 'P') {
        array[13][16] = 'Z';
        return array;
      } else {
        array[13][16] = 'P';
        return array;
      }
  }
  return array;
}

module.exports = { lightswitch };
