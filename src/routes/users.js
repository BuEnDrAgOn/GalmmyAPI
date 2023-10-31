import { index, create, update, show, showID } from '../controllers/user_controller'
import routerx from 'express-promise-router'

const router = routerx();

router.get('/', index);
router.post('/phone', show);
router.get('/:id', showID);
router.post('/create', create);
router.patch('/update/:id', update);

export default router;