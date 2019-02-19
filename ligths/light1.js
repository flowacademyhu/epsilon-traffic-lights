const light1 = (array) => {
  if (array[3][3] == 0) {
    array[3][3] = 1;
    return true;
  } else {
    array[3][3] = 0;
    return false;
  }
};

module.exports = { light1 };
