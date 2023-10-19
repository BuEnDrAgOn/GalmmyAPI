 import { index, create, update } from '../controllers/areas_controller'
 import routerx from 'express-promise-router'

 const router = routerx();

 router.get('/', index);
 router.post('/create', create);
 router.patch('/update/:id', update);

 export default router;