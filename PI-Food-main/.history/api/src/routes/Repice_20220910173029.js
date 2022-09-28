const axios  = require('axios');
const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env



router.get('/',async (req,res)=>{
    try{
        const { name }= req.query

        let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=8f2787576dca4baa99f10ec43ea920b1&addRecipeInformation=true&number=100`)
        consuApi =  consuApi.data.results.map(e=>{
                    

            return{
                image:e.image,
                vegetarian:e.vegetarian?'si':'no',
                vegan:e.vegan?'si':'no',
                glutenFree:e.glutenFree?'si':'no',
                dairyFree:e.dairyFree?'si':'no',
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
        if(name){
            let resultadoBusqueda = consuApi.filter(e=>e.title.toLowerCase().includes(title.toLowerCase()))
            console.log(resultadoBusqueda)
            resultadoBusqueda.length
            ?res.send(resultadoBusqueda)
            : res.send('no esta')
        }else{
            res.json(consuApi)
        }
    }catch(e){
        console.log(e)
    }
})



module.exports = router;