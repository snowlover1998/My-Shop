const Product = require('../models/Product');
const { MongooseToObject, mongooseToObject } = require('../../util/mongoose');
const fs = require('fs');
const binaryToBase64 = require('../../util/imageHandler');


class ProductController {
  upload(req, res, next) {
    res.render('products/upload')
  }

  store(req, res, next) {
    const product = new Product(req.body);
    const files = req.files
    if (!files) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }

    var imgArr = [];
    files.forEach(file => {
      imgArr.push({
        data: fs.readFileSync(file.path),
        contentType: 'image/png',
      });
      binaryToBase64.deleteFile(file)
    });



    // product.image.data = fs.readFileSync(req.files.path)
    // product.image.contentType = 'image/png'; 
    product.image = imgArr;
    Product.addProduct(product)
      .then(() => { res.redirect('/') })
      .catch(next);
  }

  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then(product => {
        let newProduct = binaryToBase64.mulitipleImgToBase64(product);
        res.render('products/show', { product: mongooseToObject(newProduct) })
        // res.render('products/show', { product: mongooseToObject(product) })
      })
      .catch(next);
  }

  pro(req, res, next) {
    Product.find({})
      .then(products => {
        // let newProducts = binaryToBase64.homeImgBinaryToBase64(products);
        // res.render('home', { products: multipleMongooseToObject(newProducts) })
        return res.json(products);
      })
      .catch(next);
  }
}

module.exports = new ProductController;