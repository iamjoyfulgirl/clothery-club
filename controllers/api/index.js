const router = require('express').Router();
const userRoutes = require('./user-router');
const categoryRoutes = require('./category-router');
const typeRoutes = require('./type-router');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/type', typeRoutes);

module.exports = router;

