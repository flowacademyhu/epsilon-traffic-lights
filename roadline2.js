let array = require('./generateArray');
let fill = require('./generateArray');
let main = require('./generateArray');
let size = 30;
let finalarray = fill(main(size));

const print2D = (array) => {
  for (let x = 0; x < finalarray.length; x++) {
    for (let y = 0; y < finalarray[x].length; y++) {
      process.stdout.write(finalarray[x][y] + '');
    }    console.log();
  }
};

print2D();
module.exports = { };

