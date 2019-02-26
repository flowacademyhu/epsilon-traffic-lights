const map = require('./map'); // tömbhívás
const ligthswitch = require('./lightswitch'); // lámpahívás
const keypress = require('keypress'); // irányításhívás
const randomCar = require('./randomCarGenerator'); // randomautóhívás
const move = require('./moveFunction'); // a mozgást hívja meg (sztem mehet a randomkocsigenerátorhoz)
const output = require('./table');
const crash = require('./moveFunction');

// gombnyomás
function buttonpress () {
  process.stdin.setRawMode(true);
  keypress(process.stdin);
  process.stdin.resume();
}

process.stdin.on('keypress', function (ch, key) {
  if (key) {
    if (key.name === 'up') {
      ligthswitch.lightswitch(1, map.map);
    }
    if (key.name === 'down') {
      ligthswitch.lightswitch(2, map.map);
    }
    if (key.name === 'left') {
      ligthswitch.lightswitch(3, map.map);
    }
    if (key.name === 'right') {
      ligthswitch.lightswitch(4, map.map);
    }
    if (key.name === 'q') {
      process.exit(1);
    }
    console.clear();
    console.log(map.map);
  }
});

/*function crash (array) {
  if (array[13][16] === 'Z' && array[14][16] !== 0 && array[15][15] !== 2) {
    console.log('GAME OVER!'); // jobb felső baleset
    process.exit(1);
  } else if (array[13][13] === 'Z' && array[13][14] !== 0 && array[14][15] !== 3) {
    console.log('GAME OVER'); // bal felső baleset
    process.exit(1);
  } else if (array[16][13] === 'Z' && array[15][13] !== 0 && array[14][14] !== 4) {
    console.log('GAME OVER'); // bal alsó baleset
    process.exit(1);
  } else if (array[16][16] === 'Z' && array[16][15] !== 0 && array[15][14] !== 1) {
    console.log('GAME OVER'); // jobb alsó baleset
    process.exit(1);
  }
  return array;
}*/

function efd (térkép) {
  console.clear();
  console.log(térkép);
 }
 
 setInterval(function () { efd(map.map); }, 100);
 // setInterval(function () { asd(randomCar.myCars); }, 3000);
 
// function asd (cars) {
// console.log(cars);
// }

buttonpress();
