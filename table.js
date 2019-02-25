const { table } = require('table');
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
