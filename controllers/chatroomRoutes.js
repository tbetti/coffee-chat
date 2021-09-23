const router = require('express').Router();
const withAuth = require('../utils/helpers');

// Display HTML 
router.get('/', withAuth, async (req, res) =>{
    const username = await req.session.user_name;
    try{
        res.render('chat', {username})
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;