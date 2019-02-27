const map = require('./map');

const frontMap = (backMap) => {
  let resultString = '';

  for (let i = 0; i < backMap.length; i++) {
    let row = [];
    for (let j = 0; j < backMap[i].length; j++) {
      row.push(backMap[i][j]);
    }
    resultString += row + '\n';
  }
  return resultString;
};

// setInterval(function () { frontMap(map); }, 10);

// console.log(frontMap(map.map));

module.exports = { frontMap };
