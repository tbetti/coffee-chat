const router = require('express').Router();

// Display HTML 
router.get('/', (req, res) =>{
    try{
        res.render('chat')
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;