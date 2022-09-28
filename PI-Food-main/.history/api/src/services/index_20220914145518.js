const axios = require('axios')
const {Diet, Recipe} = require('../db')

const getCallApi =  async ()=>{
    let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=56cdd6a26a9546a5964edbdfc60848f6&addRecipeInformation=true&number=100`)
        consuApi =  consuApi.data.results.map(e=>{
            return{
                image:e.image,
                diets:e.diets || 'sin dieta',
                title:e.title,
                id:e.id,
                summary:e.summary || 'agregar summary',
                healthScore: e.healthScore || 'sin score',
                analyzedInstructions: e.analyzedInstructions[0]?.steps.map(e=>{return{number:e.number,step:e.step}})
        }}) 
        return consuApi;
}

const getDbInf = async ()=>{
    return await Recipe.findAll({
        include:{
            model: Diet,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    })
}

const getAll =async ()=>{
    let apiInf = await getCallApi()
    let dbInf = await getDbInf()
    let total = [...apiInf,...dbInf]
    return total
}

module.exports= {getAll};