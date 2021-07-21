const router = require('express').Router();

const userRoutes = require('./userRoutes.js');

<<<<<<< HEAD
const campground_post_routes = require('./campground-post');
const postRoutes = require('./blogpostroutes');
=======

const postRoutes = require('./blogpostRoutes');
>>>>>>> a67854c664bbe743112b2ac19c1914b2595d72d8
const commentRoutes = require('./comment-routes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/campground_post_routes' , campground_post_routes);


module.exports = router;