import express from 'express';

import ClassesController from './controllers/ClassesController';

const routes = express.Router();

routes.post('/classes', ClassesController.create);
routes.get('/classes', ClassesController.index);

routes.post('/connections', ClassesController.create);
routes.get('/connections', ClassesController.index);

export default routes;