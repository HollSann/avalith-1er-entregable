import express from 'express';
const router = express.Router();
import { getAllCarts, getCartById } from '../controllers/carts.controller.js'

router.get('/carts', getAllCarts);
router.get('/carts/:id', getCartById)
export default router;