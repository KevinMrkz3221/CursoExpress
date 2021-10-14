const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const testsRouter = require('./test.router');
const orderRouter = require('./orders.router');


function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router);
  app.use('/', testsRouter);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/oders', orderRouter);
}


module.exports = routerApi;