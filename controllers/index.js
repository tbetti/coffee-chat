const router = require('express').Router();

// Import routes for login, homepage, and chatroom
const apiRoutes = require('./api/loginRoutes');
const homeRoutes = require('./homeRoutes');
const chatroomRoutes = require('./chatroomRoutes');

// Assign routes for login, homepage, and chatroom
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/chat', chatroomRoutes);

module.exports = router;
