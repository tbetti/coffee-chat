const router = require('express').Router();

router.get('/', (req, res)=>{
    try{
        res.render('home');
    } catch(err){
        res.json(err)
    }
});


module.exports = router;