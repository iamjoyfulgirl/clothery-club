const router = require('express').Router();
const { Category } = require('../../models');

// GET all categories for home
router.get('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['category_name'],
                },
            ],
        });

        const category = dbCategoryData.map((category) =>
            category.get({ plain: true })
        );

        res.render('home', {
            category,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one category
router.get('/:id', async (req, res) => {
    try {
        const dbCatagoryData = await Category.findByPk(req.params.id, {
            include: [
                {
                    model: Category,
                    attributes: [
                        'id',
                        'category_name'
                    ],
                },
            ],
        });

        const category = dbCategoryData.get({ plain: true });
        res.render('category', { category });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
