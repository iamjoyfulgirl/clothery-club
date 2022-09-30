const router = require('express').Router();
const { Product } = require('../../models');

router.get('type/men', async(req, res) => {
    try {
      const dbProductData = await Product.findAll( {
        where: {
          type: "Men"
      },
      attributes: [
        'id', 'name', 'type', 'category', 'price', 'photo_url'
      ]})
  
      const products = productData.map((product) => product.get({ plain: true }));
      res.render('type', { products });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/women', async(req, res) => {
  try {
    const dbProductData = await Product.findAll( {
      where: {
        type: "Women"
    },
    attributes: [
      'id', 'name', 'type', 'category', 'price', 'photo_url'
    ]})

    const type = dbProductData.get({ plain: true });
    res.render('type', { type });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;