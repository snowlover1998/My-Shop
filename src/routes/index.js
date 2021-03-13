const homeRouter = require('./home');
const productRouter = require('./product');
const meRouter = require('./me');

function route(app) {
  app.use('/me', meRouter)
  app.use('/products', productRouter);
  app.use('/', homeRouter);
}

module.exports = route;