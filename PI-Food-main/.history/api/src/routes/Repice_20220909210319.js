const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env
const callApi = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)


router.get('/',(req,res)=>{
    res.status(200).send(callApi)
})



module.exports = router;