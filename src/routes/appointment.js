import { index, create, update, show, appointment } from '../controllers/appointment_controller'
import routerx from 'express-promise-router'

const router = routerx();

router.get('/', index);
router.get('/:id_user', show);
router.post('/appointment', appointment);
router.post('/create', create);
router.patch('/update/:id', update);

export default router;