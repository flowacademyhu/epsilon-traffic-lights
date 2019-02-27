let map = require('./map');
var ctx = require('axel');

function frontMap (backMap) {
  let prettyPrint;
  for (let i = 0; i < backMap.length; i++) {
    for (let j = 0; j < backMap[i].length; j++) {
      if (backMap[i][j] === ' ') {
        prettyPrint += '░';
      } else if (backMap[i][j] === 0) {
        prettyPrint += '▓';
      } else if (backMap[i][j] === 1) {
        prettyPrint += '¥';
      } else if (backMap[i][j] === 2) {
        prettyPrint += '©';
      } else if (backMap[i][j] === 3) {
        prettyPrint += 'Þ';
      } else if (backMap[i][j] === 4) {
        prettyPrint += '×';
      } else if (backMap[i][j] === 'Z') {
        prettyPrint += 'Z';
      } else if (backMap[i][j] === 'P') {
        prettyPrint += 'P';
      } else if (backMap[i][j] === 'S') {
        prettyPrint += 'S';
      } else if (backMap[i][j] === 'c') {
        prettyPrint += 'c';
      } else if (backMap[i][j] === 'o') {
        prettyPrint += 'o';
      } else if (backMap[i][j] === 'r') {
        prettyPrint += 'r';
      } else if (backMap[i][j] === 'e') {
        prettyPrint += 'e';
      } else if (backMap[i][j] === ':') {
        prettyPrint += ':';
      }
    }
    prettyPrint += '\n';
  }
  return prettyPrint;
}
console.log(frontMap(map.map));

module.exports = { frontMap };
