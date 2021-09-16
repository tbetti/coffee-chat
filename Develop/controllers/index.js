const router = require('express').Router();

// Import routes for login, homepage, and chatroom
const loginRoutes = require('./loginRoutes');
const homeRoutes = require('./homeRoutes');
const chatroomRoutes = require('./chatroomRoutes');

// Assign routes for login, homepage, and chatroom
router.use('/', loginRoutes);
router.use('/home', homeRoutes);
router.use('/chat', chatroomRoutes);

module.exports = router;
