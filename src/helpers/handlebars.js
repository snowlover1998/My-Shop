

module.exports = {

  showPrice: (price, salePrice) => {
      return (price - salePrice).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  },

  salePecents:  (price, salePrice) => {
    return `${Math.ceil((salePrice / price) * 100)}%` ;
  }
}
