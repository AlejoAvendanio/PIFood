
const { Router } = require('express');
const router = Router();
const {getAll}= require('../services/index')


const consuApi = getAll()

router.get('/',async (req,res)=>{
    try{
        const { name }= req.query
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

router.get('/idReceta',async (req,res)=>{
    const {idRaza} = req.params;
    
} )



module.exports = router;