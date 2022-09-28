
const { Router } = require('express');
const router = Router();
const {getAll}= require('../services/index')



router.get('/',async (req,res)=>{
    try{
        const { name }= req.query
        let consuApi = await getAll()
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



module.exports = router;