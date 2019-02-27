const map = require('./map');

const frontMap = (backMap) => {
  let resultString = '';

  for (let i = 0; i < backMap.length; i++) {
    let row = [];
    for (let j = 0; j < backMap[i].length; j++) {
      row.push(backMap[i][j]);
    }
    row.join('');
    resultString += row + '\n';
  }
  return resultString;
};

// console.log(frontMap(map.map));

module.exports = { frontMap };
