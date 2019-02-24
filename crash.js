let map = require ('./map');

function crash (array) {
  if (array[13][16] = 'Z' && array[14][16] !== 0 && (array[15][15] === 2 || array[15][15] === 4)) {
    console.log('GAME OVER!'); // jobb felső baleset
    process.exit(1);
  } else if (array[13][13] = 'Z' && array[13][14] !== 0 && (array[14][15] === 4 || array[14][15] === 1)) {
    console.log('GAME OVER'); // bal felső baleset
    process.exit(1); 
  } else if (array[16][13] = 'Z' && array[15][13] !== 0 && (array[14][14] === 1 || array[14][14] === 2)) {
    console.log('GAME OVER'); // bal alsó baleset
    process.exit(1);
  } else if (array[16][16] = 'Z' && array[16][15] !== 0 && (array[15][14] === 2 || array[14][14] === 3)) {
    console.log('GAME OVER'); // jobb alsó baleset
    process.exit(1);
}
}
module.exports = { crash };
