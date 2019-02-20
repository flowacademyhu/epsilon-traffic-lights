const light3 = (array) => {
  if (array[6][3] == 0) {
    array[6][3] = 1;
    return true;
  } else {
    array[6][3] = 0;
    return false;
  }
};

module.exports = { light3 };
