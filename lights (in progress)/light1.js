let generatedArray = require('/home/dani/Traffic/generateArray');

const light1 = (array) => {
  array = generatedArray.fill();
  if (array[13][13] === 'P') {
    array[13][13] = 'Z';
    console.log(array);
    return true;
  } else {
    array[13][13] = 'P';
    return false;
  }
};

const stopit1 = (boolean) => {
  boolean = light1();
  if (boolean === false) {
    console.log('nem megy az autó');
  } else {
    console.log('megy az autó');
  }
};

stopit1();

module.exports = {
  light1,
  stopit1
};
