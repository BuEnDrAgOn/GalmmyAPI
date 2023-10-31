const { Router } = require('express');
const router = Router();
import services from './services'
import users from './users'
import appointment from './appointment'

router.use('/services', services)
router.use('/users', users)
router.use('/appointment', appointment)

export default router;