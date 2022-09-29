const router = ('express').Router();

const product = [
    {
        product_name: 'Shirt',
        price: 9.99,
        size: 'small, medium, large',
    },
];

router.get('/', async (req, res) => {
    res.render('all');
  });

