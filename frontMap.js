let map = require('./map');

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
      }
    }
    prettyPrint += '\n';
  }
  return prettyPrint;
}
console.log(frontMap(map.map));

module.exports = { frontMap };
