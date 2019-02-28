const map = require('./map');

let myCars = [];
const randomCarGenerator = (array, carArray) => {
  let max = 5;
  let min = 1;
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  switch (randomNum) {
    case 1:
      let carValue1 = Math.floor(Math.random() * (max - min)) + min;
      array[0][14] = carValue1;
      carArray.push([0, 14, carValue1]);
      return array;
    case 2:
      let carValue2 = Math.floor(Math.random() * (max - min)) + min;
      array[15][0] = carValue2;
      carArray.push([15, 0, carValue2]);
      return array;
    case 3:
      let carValue3 = Math.floor(Math.random() * (max - min)) + min;
      array[29][15] = carValue3;
      carArray.push([29, 15, carValue3]);
      return array;
    case 4:
      let carValue4 = Math.floor(Math.random() * (max - min)) + min;
      array[14][29] = carValue4;
      carArray.push([14, 29, carValue4]);
      return array;
  }
  return array;
};

let randomCar = setInterval(function () { randomCarGenerator(map.map, myCars); }, 3000);

module.exports = { randomCar, myCars };
