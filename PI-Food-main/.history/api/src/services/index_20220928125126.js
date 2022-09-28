const axios = require('axios')
const {Diet, Recipe} = require('../db')

const getCallApi =  async ()=>{
    let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d0778da73b474dd6bbbcc3b7b16fed27&addRecipeInformation=true&number=100`)
    try{
    consuApi =  consuApi.data.results.map(e=>{
            return{
                image:e.image,
                diets:e.diets ?? 'sin dieta',
                title:e.title,
                id:e.id,
                summary:e.summary ?? 'agregar summary',
                healthScore: e.healthScore ?? 'sin score',
                analyzedInstructions: e.analyzedInstructions[0]?.steps.map(e=>{return{number:e.number,step:e.step}}) ?? [{number:1,step:'sin steps'}]
        }}) 
        return consuApi;
    }catch(e){
        console.log(e)
    }
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