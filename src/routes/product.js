const express = require('express');
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'src/uploads/' })

const productController = require('../app/controllers/ProductController');

router.get('/upload', productController.upload);
router.post('/store', upload.array('image', 12), productController.store);
router.get('/show/:slug', productController.show);
router.get('/me')

module.exports = router;