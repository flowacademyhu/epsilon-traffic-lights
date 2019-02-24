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
      return false
  }
};
output = table(data, config);
console.log(output);