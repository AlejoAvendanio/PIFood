const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env



router.get('/',async (req,res)=>{
    try{
        const consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        res.send(consuApi)
    }catch(e){
        console.log(e)
    }
})



module.exports = router;