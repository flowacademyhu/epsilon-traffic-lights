const map = require('./map'); // tömbhívás
const ligthswitch = require('./lightswitch'); // lámpahívás
const keypress = require('keypress'); // irányításhívás
const output = require('./table'); // table meghívása

// gombnyomás
function buttonpress () {
  process.stdin.setRawMode(true);
  keypress(process.stdin);
  process.stdin.resume();
}
console.log(output.output);

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
    console.log(output.output);
  }
});

buttonpress();
