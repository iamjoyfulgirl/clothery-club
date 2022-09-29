const router = require('express').Router();
const { Product } = require('../../models');

router.get('/man', async(req, res) => {
    try {
      const dbProductData = await Product.findAll( {
        where: {
          type: "Men"
      },
      attributes: [
        'id', 'name', 'type', 'category', 'price', 'photo_url', 'color', 'size'
      ]})
  
      const type = dbProductData.get({ plain: true });
      res.render('type', { type });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;