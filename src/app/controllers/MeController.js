const Product = require('../models/Product');

class MeController {
  index(req, res, next) {
    res.render('me/products')
  }
}

module.exports = new MeController;