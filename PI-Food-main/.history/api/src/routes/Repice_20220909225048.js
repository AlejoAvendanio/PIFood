const axios  = require('axios');
const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env



router.get('/',async (req,res)=>{
    try{
        let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=84a66f50914a4effba0853c244bbfc74&addRecipeInformation=true&number=100`)
        consuApi =  consuApi.data.results.map(e=>{
                    

            return{
                image:e.image,
                vegetarian:e.vegetarian,
                vegan:e.vegan,
                glutenFree:e.glutenFree,
                dairyFree:e.dairyFree,
                title:e.title,
                id:e.id,
                summary:e.summary || 'agregar summary',
                healthDcore: e.healthScore || 'sin score',
                instruction: e.analyzedInstructions.map(p=>{
                    return {
                        steps : p.steps
                    }
                })
    }})
        res.json(consuApi)
    }catch(e){
        console.log(e)
    }
})



module.exports = router;