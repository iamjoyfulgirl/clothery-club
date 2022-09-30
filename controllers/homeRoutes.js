const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Product,
  User
} = require('../models');

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      attributes: ['id', 'name', 'type', 'category', 'price', 'photo_url']
    });
    console.log('line 38', productData);

    const product = productData.get({
      plain: true
    });
    console.log('line 43', product);

    res.render('product-details', { product });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/type/men', async(req, res) => {
  try {
    const productData = await Product.findAll( {
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

router.get('/type/women', async(req, res) => {
try {
  const productData = await Product.findAll( {
    where: {
      type: "Women"
  }})
  console.log(productData);

  const products = productData.map((product) => product.get({ plain: true }));
  console.log(products);
  res.render('type', { products });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/type/footwear', async(req, res) => {
  try {
    const productData = await Product.findAll( {
      where: {
        type: "Footwear"
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

router.get('/category/tops', async(req, res) => {
  try {
    const productData = await Product.findAll( {
      where: {
        category: "Tops"
    },
    attributes: [
      'id', 'name', 'type', 'category', 'price', 'photo_url'
    ]})

    const products = productData.map((product) => product.get({ plain: true }));
    res.render('category', { 
      products,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/bottoms', async(req, res) => {
  try {
    const productData = await Product.findAll( {
      where: {
        category: "Bottoms"
    },
    attributes: [
      'id', 'name', 'type', 'category', 'price', 'photo_url'
    ]})

    const products = productData.map((product) => product.get({ plain: true }));
    res.render('category', { 
      products,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/headwear', async(req, res) => {
  try {
    const productData = await Product.findAll( {
      where: {
        category: "Headwear"
    },
    attributes: [
      'id', 'name', 'type', 'category', 'price', 'photo_url'
    ]})

    const products = productData.map((product) => product.get({ plain: true }));
    res.render('category', { 
      products,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/outerwear', async(req, res) => {
  try {
    const productData = await Product.findAll( {
      where: {
        category: "Outerwear"
    },
    attributes: [
      'id', 'name', 'type', 'category', 'price', 'photo_url'
    ]})

    const products = productData.map((product) => product.get({ plain: true }));
    res.render('category', { 
      products,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/accessories', async(req, res) => {
  try {
    const productData = await Product.findAll( {
      where: {
        category: "Accessory"
    },
    attributes: [
      'id', 'name', 'type', 'category', 'price', 'photo_url'
    ]})

    const products = productData.map((product) => product.get({ plain: true }));
    res.render('category', { 
      products,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/:name', async(req, res) => {
  const category = req.params.name
});

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

router.get('/cart/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {});

    const user = userData

  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
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