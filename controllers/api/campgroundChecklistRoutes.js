const router = require('express').Router();
const sequelize = require('../config/connection');
const { CampgroundChecklist } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
    CampgroundChecklist.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'name',
                'icon',
                'created_at'
            ],
            include: [{
                    model: CampgroundChecklist,
                    attributes: ['id', 'name', 'icon', 'created_at'],
             } ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/new', (req, res) => {
    res.render('new-campground-checklist');
});



module.exports = router;