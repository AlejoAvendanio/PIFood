
const { Router } = require('express');
const router = Router();
const {getAll}= require('../services/index')
const { Diet, Recipe } = require('../db')


router.get('/',async (req,res)=>{
    try{
        const { name }= req.query
        const consuApi = await getAll()
        if(name){
            let resultadoBusqueda = consuApi.filter(e=>e.title.toLowerCase().includes(name.toLowerCase()) )
            resultadoBusqueda.length
            ?res.status(200).send(resultadoBusqueda)
            : res.status(404).send('no esta')
        }else{
            res.json(consuApi)
        }
    }catch(e){
        console.log(e)
    }
})

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const consuApi =  await getAll()
    let receta = consuApi.filter(e=>e.id==id) 
    console.log(receta)
    id
    ?res.status(200).json(receta)
    :res.status(300).send('sin detalles')
})

router.post('/',async (req,res)=>{
    let { title,image,summary,healthScore,analyzedInstructions,diets, } = req.body
    try{
        const consuApiCheck = await getAll()
        const titleRepeat = consuApiCheck.some(el=>el.title===title)
        console.log(titleRepeat)
        if(!titleRepeat){
            if(title && summary && healthScore){
                let recipe = await Recipe.create({
                    title,
                    image: image || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs1.eestatic.com%2F2019%2F08%2F05%2Fcocinillas%2Freportajes-gastronomicos%2Freportajes_gastronomicos_419219745_131682838_1706x960.jpg&imgrefurl=https%3A%2F%2Fwww.elespanol.com%2Fcocinillas%2Freportajes-gastronomicos%2F20190805%2Fcomida-japonesa-descubrimos-gracias-animes-mangas-infancia%2F418458724_0.html&tbnid=7wqZ870z6qYgbM&vet=12ahUKEwiK44T2wZL6AhViBLkGHZJlBdYQMyhBegUIARCGAQ..i&docid=xWsJFq8SE9NxvM&w=1706&h=960&q=comida%20anim&client=opera-gx&ved=2ahUKEwiK44T2wZL6AhViBLkGHZJlBdYQMyhBegUIARCGAQ',
                    summary,
                    healthScore,
                    analyzedInstructions,
                })

                let associat = await Diet.findAll({
                    where:{name:diets}
                })

                recipe.addDiet(associat)
                res.status(200).send('create recipe')
            }else{
                res.status(400).send('the information has some error, check')
            }
    }else{
        res.status(400).send('invalid name already exists')
    }
    }catch(error){
        console.log(error)
        res.status(404).send(error)
    }
})



module.exports = router;