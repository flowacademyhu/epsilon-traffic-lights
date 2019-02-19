const light4 = (array) => {
  if (array[6][6] == 0) {
    array[6][6] = 1;
    return true;
  } else {
    array[6][6] = 0;
    return false;
  }
};

module.exports = { light4 };
