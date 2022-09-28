const { Router } = require('express');
const router = express.Router();
const {API_KEY} = process.env
const callApi = axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=84a66f50914a4effba0853c244bbfc74&addRecipeInformation=true&number=100')


router.get('/',(req,res)=>{
    const { name } =req.query
    
    name?

})



module.exports = router;