const express = require('express');
const faker = require('faker')

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];

  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }

  res.json(products);
});

app.get('/categories', (req, res) =>{
  res.json([
    {
      category: "Blusa"
    },
    {
      category: "camisa"
    },
    {
      category: "pantalon"
    }
  ]);
});

app.get('/products/:id', (req, res) =>{
  const { id } = req.params;

  res.json({
    id,
    name: "product 2",
    price: 200
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
});

app.listen(port, () =>{
  console.log('Mi port ' + port + " Funciona");
});