import { Router } from 'express';
import { handleGetUsers, handleUserSave } from '../handler/handler'

const router = Router();

router.post('/save', handleUserSave);
router.get('/users', handleGetUsers);

export default router;
