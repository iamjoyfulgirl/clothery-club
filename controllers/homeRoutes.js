const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Product,
  User
} = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all products and JOIN with user data
    const productData = await Product.findAll({});
    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Project.findByPk(req.params.id, {
      attributes: ['id', 'name', 'type', 'category', 'price', 'photo_url']
    });

    const product = productData.get({
      plain: true
    });

    res.render('product-details', {
      ...product,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;