const light2 = (array) => {
  if (array[3][6] == 0) {
    array[3][6] = 1;
    return true;
  } else {
    array[3][6] = 0;
    return false;
  }
};

module.exports = { light2 };
