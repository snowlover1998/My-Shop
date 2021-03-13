const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const binaryToBase64 = require('../../util/imageHandler');

class HomeController {
  index(req, res, next) {

    Product.find({})
      .then(products => {
        let newProducts = binaryToBase64.homeImgBinaryToBase64(products);
        res.render('home', { products: multipleMongooseToObject(newProducts) })
      })
      .catch(next);
  };
}

module.exports = new HomeController;
