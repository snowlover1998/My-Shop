var isNumber = require('is-number');

module.exports = {
  minus: (a, b) => {
    if (!isNumber(a)) {
      throw new TypeError(typeof a);
    }
    if (!isNumber(b)) {
      throw new TypeError(typeof b);
    }
    return Number(a) - Number(b);
  },

  showPrice: (price, salePrice) => {
      return (price - salePrice).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  },

  salePecents:  (price, salePrice) => {
    return `${Math.ceil((salePrice / price) * 100)}%` ;
  }
}
