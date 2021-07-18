const router = require('express').Router();
const sequelize = require('../config/connection');
const { Campground_Post, Trail_Post, Campground_Checklist, Trail_Checklist, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/choose-path', (req, res) => {
    res.render("choose-path")
})

router.get('/camp-form', (req, res) => {
    res.render("camp-form") 
})

router.get("/user-dashboard", (req, res)=> {

    /*
        TODO
        In order to get the data from the db instead, 
        make a query before the render either right here
        or better yet in another controller file. 

        That query will get you data from your api/db, 
        and then you can pass that as an object the render

        ex psuedocode: 

        let queryData = await api.query()
        res.render('user-dashboard', queryData)


    */
    res.render('user-dashboard', {
        posts:  [
            {
                title: 'title one',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
            },
            {
                title: 'title two',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
            },
            {
                title: 'title three',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
            },
            {
                title: 'title four',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
            },
            {
                title: 'title five',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
            },
            {
                title: 'title six',
                date: 'July 18th, 2021',
                location: 'yellowstone park',
                image: 'https://i.natgeofe.com/n/23125495-1307-4f0c-8583-602d9048b41b/gettyimages-667781269_16x9.jpg'
            }
        ]
    })
})

//make routes for remaining handlebar files

router.get('/', (req, res) => {
    // Camground_Post.findAll({
    //         where: {
    //             user_id: req.session.user_id
    //         },
    //         attributes: [
    //             'id',
    //             'title',
    //             'content',
    //             'created_at'
    //         ],
    //         include: [{
    //                 model: Comment,
    //                 attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //                 include: {
    //                     model: User,
    //                     attributes: ['username']
    //                 }
    //             },
    //             {
    //                 model: User,
    //                 attributes: ['username']
    //             }
    //         ]
    //     })
    //     .then(dbPostData => {
    //         const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('landing-page');
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });
});

// router.get('/', withAuth, (req, res) => {
//     Camground_Post.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             attributes: [
//                 'id',
//                 'title',
//                 'content',
//                 'created_at'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({ plain: true }));
//             res.render('dashboard', { posts, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/new', (req, res) => {
    res.render('user-dashboard');
});



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('user-dashboard');
        return;
    }
    res.render('login');
});




module.exports = router;