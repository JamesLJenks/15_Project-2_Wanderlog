const router = require('express').Router();
const userRoutes = require('./userroutes.js');
const postRoutes = require('./blogpostroutes');
const commentRoutes = require('./comment-routes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;