const { table } = require('table');
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