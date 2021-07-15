const router = require('express').Router();
// fix-package-lock-json
const userRoutes = require('./userRoutes.js');
=======
const userRoutes = require('./userRoutes.js');
// main
const postRoutes = require('./blogpostroutes');
const commentRoutes = require('./comment-routes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;