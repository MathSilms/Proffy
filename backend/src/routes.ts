import express from 'express'; 
import ClassController from './controllers/ClassController'; 
import ConnectionsControler from './controllers/ConnectionsController'; 

const routes = express.Router(); 

routes.post('/classes', ClassController.create); 
routes.get('/classes', ClassController.index); 
routes.post('/connections', ConnectionsControler.create); 
routes.get('/connections', ConnectionsControler.index); 

export default routes;