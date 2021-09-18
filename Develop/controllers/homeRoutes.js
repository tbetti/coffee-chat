const router = require('express').Router();

router.get('/', (req, res)=>{
    try{
        res.render('login');
    }catch(err){
        res.json(err)
    }
});

module.exports = router;