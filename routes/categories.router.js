const express = require('express')

const router = express.Router();

router.get('/categories', (req, res) =>{
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

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
});

module.exports = router
