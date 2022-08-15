import express from 'express';
import {
    getAllUsers,
    getUserById,
    getFirstUsers,
    getLimitAndSort
} from '../controllers/users.controller.js';

const router = express.Router();

router.get('/users', getLimitAndSort, getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/first', getFirstUsers);
export default router;