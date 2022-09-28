const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env



router.get('/',async (req,res)=>{
    const consuApi = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    console.log(consuApi)
    res.send(consuApi)
})



module.exports = router;