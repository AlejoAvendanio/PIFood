const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env
const callApi = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`).then(response=>response).then(data=>data.data)


router.get('/',(req,res)=>{
    res.status(200).json(callApi)
})



module.exports = router;