import express from 'express';
import {
    getAllProducts,
    getAllProductsOfCategories,
    getLimitAndSort,
    getProductById,
    getProductsByCategory,
} from '../controllers/products.controller.js';


const router = express.Router();


router.get('/products/', getLimitAndSort, getAllProducts);
router.get('/products/categories/:category', getProductsByCategory)
router.get('/products/categories', getAllProductsOfCategories)
router.get('/products/:id', getProductById)

export default router;