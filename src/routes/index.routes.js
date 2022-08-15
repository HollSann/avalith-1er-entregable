import express from 'express';
const router = express.Router();
import { getExpensiveProducts, getPrices, main, getBigCarts } from '../controllers/index.controller.js';


router.get('/', main);
router.get('/prices', getPrices)
router.get('/expensive', getExpensiveProducts)
router.get('/bigcarts', getBigCarts)
export default router;