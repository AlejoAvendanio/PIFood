
const { Router } = require('express');
const router = Router();
const {getAll}= require('../services/index')



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
    let receta = consuApi.filter(e=>e.id===id) 
    console.log(consuApi)
    id
    ?res.status(200).json(receta)
    :res.status(300).send('sin detalles')
})



module.exports = router;