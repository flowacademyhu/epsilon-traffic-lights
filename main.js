const map = require('./generateArray'); // tömbhívás
const keypress = require('keypress'); // irányításhívás

// elkészül a 30x30-as tömb
let size = 30;
let finalarray = map.main(size);
map.fill(finalarray);

// gombnyomás
function buttonpress () {
  process.stdin.setRawMode(true);
  keypress(process.stdin);
  process.stdin.resume();
}

process.stdin.on('keypress', function (ch, key) {
  if (key) {
    if (key.name === 'up') {
      map.lightnorth(finalarray);
    }
    if (key.name === 'down') {
      map.lightsouth(finalarray);
    }
    if (key.name === 'left') {
      map.lightwest(finalarray);
    }
    if (key.name === 'right') {
      map.lighteast(finalarray);
    }
    if (key.name === 'q') {
      process.exit(1);
    }
    console.clear();
    map.print2D(finalarray);
  }
});

buttonpress();
