import axios from 'axios'
import {Diet, Recipe} from '../db'

const getCallApi =  async ()=>{
    let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1c29f2c314dc40c2af415be82ff77151&addRecipeInformation=true&number=100`)
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