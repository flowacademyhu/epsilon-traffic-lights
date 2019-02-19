/* ennyi lenne ?
visszaad egy értéket, ezt átadja és ez alapján változik a lámpa.
ezt a függvényt, gombnyomás hívja meg
mivel legyen egyenlő?????????? át kell hogy alakítsa az értéket attól függően, hogy zöld vagy piros
*/

const light1 = (array) => {
  if (array[3][3] == 0) {
    array[3][3] = 1;
    return true;
  } else {
    array[3][3] = 0;
    return false;
  }
};

module.exports = { light1 };
