const homeRouter = require('./home');
const productRouter = require('./product');

function route(app) {
  app.use('/products', productRouter);
  app.use('/', homeRouter);
}

module.exports = route;