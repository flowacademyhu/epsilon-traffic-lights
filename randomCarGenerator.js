const map = require('./map');

let myCars = [];

// készpálya = array
// carArray = myCars
// random generál egy autót az adott 4 koordináta egyikére
// random ad egy értéket, DE helytől függően 3 közül ( vagy 4 ha megfordul )
// ha dél kék, és délről jön, nem lehet kék az autó
const randomCarGenerator = (array, carArray) => {
  let max = 5;
  let min = 1;
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  console.clear(); // ide tűnik jónak!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log(array); // asszem ez is
  switch (randomNum) {
    case 1:
      let carValue1 = Math.floor(Math.random() * (max - min)) + min;
      array[0][14] = carValue1;
      carArray.push([0, 14, carValue1]);
      return array; // return kell a helyére, ami visszaadja az új map-ot???????????
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

// vmi nem fasza
// setInterval(randomCarGenerator(map.map, myCars), 5000);

let randomCar = setInterval(function () { randomCarGenerator(map.map, myCars); }, 1800);

module.exports = { randomCar, myCars };
