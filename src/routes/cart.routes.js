import express from 'express';
import {
    getAllCarts,
    getCartById,
    getLimitAndSort,
} from '../controllers/carts.controller.js';
const router = express.Router();

router.get('/carts', getLimitAndSort, getAllCarts);
router.get('/carts/:id', getCartById);


export default router;