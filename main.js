const map = require('./map'); // tömbhívás
const ligthswitch = require('./lightswitch'); // lámpahívás
const keypress = require('keypress'); // irányításhívás
const randomCar = require('./randomCarGenerator'); // randomautóhívás
const move = require('./moveFunction'); // a mozgást hívja meg
const frontMap = require('./frontMap'); // meghívja a játszható mapot

let myCars = []; // itt tároljuk az autóinkat
let interval = 1000; // 1 másodperc
let counter = 0;

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

(function () {
  let timer = () => {
    if (counter % 3 === 0) {
      randomCar.randomCarGenerator(map.map, myCars);
    }
    move.move(myCars, map.map);
    console.log(global.scoreNumber);
    counter++;
    if (global.scoreNumber > 0 && global.scoreNumber % 2 === 0) {
      interval -= 600; // javítani, ha nem sikerül akkor marad az if, else is
    }
    setTimeout(timer, interval);
  };
  timer();
})();

function display (gamerMap) {
  console.clear();
  console.log(gamerMap);
}

setInterval(function () { display(frontMap.frontMap(map.map)); }, 100); // frissíti a játékteret
buttonpress(); // gombnyomás
