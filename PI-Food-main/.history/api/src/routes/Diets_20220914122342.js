const { Router } = require('express');
const router = Router();
const {Diets} = require('../db')


router.get('/', async(req,res)=>{
    try{
        let diets = await Diets.findAll()
        res.status(200).json(diets)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router;
