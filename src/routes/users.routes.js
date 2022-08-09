import express from 'express';
const router = express.Router();
import { getAllUsers, getUserById } from '../controllers/users.controller.js';


router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;