const gameOver = (map) => {
  if (map[13][14] !== 0 && map[12][14] !== 0 && map[11][14] !== 0 && map[10][14] !== 0 && map[9][14] !== 0) {
    console.log('Game Over1'); // északról dugó
    process.exit(1);
  } else if (map[16][15] !== 0 && map[17][15] !== 0 && map[18][15] !== 0 && map[19][15] !== 0 && map[20][15] !== 0) {
    console.log('Game Over2'); // délről dugó
    process.exit(1);
  } else if (map[14][16] !== 0 && map[14][17] !== 0 && map[14][18] !== 0 && map[14][19] !== 0 && map[14][20] !== 0) {
    console.log('Game Over3'); // keletről dugó
    process.exit(1);
  } else if (map[15][13] !== 0 && map[15][12] !== 0 && map[15][11] !== 0 && map[15][10] !== 0 && map[15][9] !== 0) {
    console.log('Game Over4'); // nyugatról dugó
    process.exit(1);
  }
};

module.exports = { gameOver };
