import express from 'express'
import Contato from '../model/model.js'
import '../bd/bdConection.js'


const routerContato = express.Router()

routerContato.post('/register', async(req, res)=>{
  
     const {email} = req.body; 
     const emaill = await Contato.findOne({email});

     if(emaill) return res.status(401).send({msg: "O número já existe"})
     
      const {name ,contact, piture} = req.body;
      const contato = new Contato({name, emaill, contact, piture});

      await contato.save();
     res.send({ msg: "Contato salvo"})
})

routerContato.get('/contacts', async (req, res)=>{

          try{
               const contacts = await Contato.find({});
               res.status(200).send({contacts});
          }catch(err){

          }
});

routerContato.get('/delete/:id', async (req, res)=>{
       const id = req.params.id

       if(!id) return;

     try{
           await Contato.findByIdAndDelete(id);
          res.status(200).send({});
     }catch(err){

     }
});

export default routerContato;