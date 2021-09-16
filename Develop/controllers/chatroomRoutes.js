const router = require('express').Router();

// Display HTML 
router.get('/', (req, res) =>{
    try{
        res.render('<h1>The chatroom will be here!</h1>')
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;