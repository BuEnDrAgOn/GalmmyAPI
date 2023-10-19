const { Router } = require('express');
const router = Router();
import areas from './areas'

router.use('/areas', areas)

export default router;