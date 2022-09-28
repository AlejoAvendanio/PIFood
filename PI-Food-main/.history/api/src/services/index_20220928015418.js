const axios = require('axios')
const {Diet, Recipe} = require('../db')

const getCallApi =  async ()=>{
    let consuApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1effab087d93436a8171009bfb87f13a&addRecipeInformation=true&number=100`)
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
}
// const getCallApi = ()=>{
//     return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1effab087d93436a8171009bfb87f13a&addRecipeInformation=true&number=100`)
//     .then(res=>res)
//     .then(resp =>{
//         let {data} = resp
//         data = data.results.map(e=>{return {img: e.image,title: e.tite}})
//         return data
//     })
//     .catch(console.log('error datos perdidos'))
// }


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