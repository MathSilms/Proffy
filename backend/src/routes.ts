import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/classes', async (req,res) =>{
    console.log(req.body)
    const name = req.body
   
//    await db('users').insert({
//        name,
//        avatar,
//        whatsapp,
//        bio,
//    });

   return res.json(name);
});

export default routes;