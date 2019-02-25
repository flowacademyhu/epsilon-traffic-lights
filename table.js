const { table } = require('table');
<<<<<<< HEAD
let simplearray = require('./simplearray');

let config,
  data,
  output;

data = simplearray.simplearray(10);

config = {
    columns: {
        0: {
            alignment: 'left',
            width: 1
        },
        1: {
            alignment: 'center',
            width: 1
        },
        2: {
            alignment: 'right',
            width: 1
        }
    },
        border: {
            topBody: `─`,
            topJoin: `┬`,
            topLeft: `┌`,
            topRight: `┐`,
     
            bottomBody: `─`,
            bottomJoin: `┴`,
            bottomLeft: `└`,
            bottomRight: `┘`,
     
            bodyLeft: `│`,
            bodyRight: `│`,
            bodyJoin: `│`,
     
            joinBody: `─`,
            joinLeft: `├`,
            joinRight: `┤`,
            joinJoin: `┼`
        }
};
 
output = table(data, config);
 
console.log(output);
=======
let map = require('./map');
const { getBorderCharacters } = require('table');

let config;
let data;
let output;

data = map.map;

config = {
  border: getBorderCharacters(`void`),
  columnDefault: {
    paddingLeft: 0,
    paddingRight: 0
  },
  drawHorizontalLine: () => {
    return false;
  }
};
output = setInterval(function () { table(data, config); }, 1); // bocs Micsik belenyúltam, hétfőn bocsánatot kérek!!
console.log(output);

module.exports = { output };
>>>>>>> dev
