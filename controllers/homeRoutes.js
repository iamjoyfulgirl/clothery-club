const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Product,
  User
} = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);

  Product.findAll({
      attributes: [
        'id',
        'name',
        'type',
        'category',
        'price',
        'photo_url',
        'color',
        'size'
      ],
      include: [{
    
        model: User,
        attributes: ['username']
    }
]
    })
    .then(dbProductData => {
      const product = dbProductData.map(product => product.get({
        plain: true
      }));
      res.render('home', {
        product,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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
      include: [{
        model: User,
        attributes: ['username'],
      }, ],
    });

    const product = productData.get({
      plain: true
    });

    res.render('product', {
      ...product,
      logged_in: req.session.logged_in
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