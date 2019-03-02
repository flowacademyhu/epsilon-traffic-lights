function frontMap (backMap) {
  let prettyPrint = '';
  for (let i = 0; i < backMap.length; i++) {
    for (let j = 0; j < backMap[i].length; j++) {
      if (backMap[i][j] === ' ') {
        prettyPrint += '░░';
      } else if (backMap[i][j] === 0) {
        prettyPrint += '▓▓';
      } else if (backMap[i][j] === 1) {
        prettyPrint += '\x1b[43m--\x1b[0m';
      } else if (backMap[i][j] === 2) {
        prettyPrint += '\x1b[44m][\x1b[0m';
      } else if (backMap[i][j] === 3) {
        prettyPrint += '\x1b[45m\\/\x1b[0m';
      } else if (backMap[i][j] === 4) {
        prettyPrint += '\x1b[46m><\x1b[0m';
      } else if (backMap[i][j] === 'Z') {
        prettyPrint += '\x1b[32m▓▓\x1b[0m';
      } else if (backMap[i][j] === 'P') {
        prettyPrint += '\x1b[31m▓▓\x1b[0m';
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

module.exports = { frontMap };
