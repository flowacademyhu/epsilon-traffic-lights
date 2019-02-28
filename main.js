const map = require('./map'); // tömbhívás
const ligthswitch = require('./lightswitch'); // lámpahívás
const keypress = require('keypress'); // irányításhívás
const randomCar = require('./randomCarGenerator'); // randomautóhívás
const move = require('./moveFunction'); // a mozgást hívja meg
const gameOver = require('./manyCarsGameOver'); // torlódás és game over-t hívja meg
const frontMap = require('./frontMap'); // meghívja a játszható mapot
const readlineSync = require('readline-sync');

if (readlineSync.keyInYN('This is the traffic control game!\nDo you want to read the manual?')) {
  console.log('manual');
  if (readlineSync.keyIn('Press a button to start')) {} else { process.exit(); }
} else {}

let myCars = []; // itt tároljuk az autóinkat

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
  }
});

function display (gamerMap) {
  console.clear();
  console.log(gamerMap);
}

setInterval(function () { display(frontMap.frontMap(map.map)); }, 100); // frissíti a játékteret
setInterval(function () { randomCar.randomCarGenerator(map.map, myCars); }, 3000); // random autólerakás
setInterval(function () { move.move(myCars, map.map); }, 1000); // lépteti az autókat
buttonpress(); // gombnyomás
