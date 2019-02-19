const simplearray = (number) => { // number várja a N számot (NxN 0-val feltöltött 2D tömb)
  let array = [];
  let row = [];
  for (let y = 0; y < number; y++) {
    for (let x = 0; x < number; x++) {
      row[x] = 0;
    }
    array.push(row);
  }
  return array;
};

module.exports = { simplearray };

console.log(simplearray(10));
