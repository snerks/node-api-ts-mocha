import { Router } from 'express';
import { indexGetHandler } from './homeController';

const router = Router();

router.get('/', indexGetHandler);

export default router;
