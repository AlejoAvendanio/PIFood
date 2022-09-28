const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env



router.get('/',async (req,res)=>{
    const consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    res.status(200).json(consuApi)
})



module.exports = router;