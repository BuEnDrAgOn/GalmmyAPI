 import { index, create, update, show, treatment } from '../controllers/services_controller'
 import routerx from 'express-promise-router'

 const router = routerx();

 router.get('/', index);
 router.get('/service/:id', show);
 router.post('/treatment', treatment);
 router.post('/create', create);
 router.patch('/update/:id', update);

 export default router;