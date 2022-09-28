const axios = require('axios')
const {Diet, Recipe} = require('../db')

const getCallApi =  async ()=>{
    let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d5abd2dd44d84d949bfdbc86a7752815&addRecipeInformation=true&number=100`)
        consuApi =  consuApi.data.results.map(e=>{
            return{
                image:e.image,
                diets:e.diets || 'sin dieta',
                title:e.title,
                id:e.id,
                summary:e.summary || 'agregar summary',
                healthScore: e.healthScore || 'sin score',
                instruction: e.analyzedInstructions?.map(p=>{
                        steps.map(elements=>{
                            return {
                                number:elements.number
                                step:elements.step,
                            }
                        })
                    
                })
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