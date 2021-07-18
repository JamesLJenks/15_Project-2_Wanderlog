const router = require('express').Router();
const { Trail_post } = require('../../models');

//Find All Trail Posts
router.get('/trail_post', withAuth, (req, res) => {
    Trail_post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'published',
                'trailDate',
                'trailName',
                'locationCity',
                'locationState',
                'difficulty',
                'hikerExperience',
                'userStory',
                'created_at'
            ],
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { Trail_post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Find One Trail Posts by :id
router.get('/trail_post:id', withAuth, (req, res) => {
    Trail_post.findOne({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'published',
                'trailDate',
                'trailName',
                'locationCity',
                'locationState',
                'difficulty',
                'hikerExperience',
                'userStory',
                'created_at'
            ],
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { Trail_post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

//Delete Trail Post
router.delete('/trail_post:id', withAuth, (req, res) => {
    Trail_post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Post Trail Post
router.post('/trail_post', withAuth, (req, res) => {
    Trail_post.create({
        published: req.body.published,
        trailDate: req.body.trailDate,
        trailName: req.body.trailName,
        locationCity: req.body.locationCity,
        locationState: req.body.locationState,
        difficulty: req.body.difficulty,
        hikerExperience: req.body.hikerExperience,
        //title: req.body.title
        userStory: req.body.userStory,
        user_id: req.session.user_id,
     }            
 )
 .then(dbPostData => {
     const posts = dbPostData.map(post => post.get({ plain: true }));
     res.render('dashboard', { Trail_post, loggedIn: true });
 })
 .catch(err => {
     console.log(err);
     res.status(500).json(err);
 });
});

//Put Item in Trail Post
router.put('/trail_post:id', withAuth, (req, res) => {
    Trail_post.put(
        {
        title: req.body.title,
        content: req.body.content
        }, 
        {
        where: {
            id: req.params.id
        }
        }
    ).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;