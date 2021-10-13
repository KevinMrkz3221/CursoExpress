const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router')
const testsRouter = require('./test.router')


function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
  app.use('/', testsRouter);
}


module.exports = routerApi;