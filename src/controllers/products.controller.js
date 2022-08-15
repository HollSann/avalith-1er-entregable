import fetch from 'node-fetch';
import { getProducts, getAllCategories, getProductsOfCategory } from '../models/products.js';

export const getAllProducts = async (_req, res) => res.send(await getProducts());

export const getLimitAndSort = async (req, res) => {
    let { limit } = req.query;
    let { sort } = req.query;
    if (sort === undefined) {
        return await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(json => res.send(json));

    } else {
        return await fetch(`https://fakestoreapi.com/products?sort=${sort}`)
            .then(res => res.json())
            .then(json => res.send(json));
    };
};

export const getProductById = async (req, res) => {
    const products = await getProducts();
    let { id } = req.params
    if (id > 20) {
        res.status(400).send('Bad Request(number of products found:20)')
    } else {
        const product = products.find(e => e.id == id);
        res.send(product);
    }
};

export const getProductsByCategory = async (req, res) => {
    const category = req.params.category;
    let products = await getProducts();
    let productsArray = [];
    products = products.map(product => {
        if (product.category.includes(category)) {
            productsArray.push(product);
        };
    });
    res.send(productsArray);
};
export const getAllProductsOfCategories = async (_req, res) => {
    let allCategories = await getAllCategories();
    let productsArray = [];

    productsArray = allCategories.map(async category => {
        let products = await getProductsOfCategory(category);
        return {
            category,
            products
        };
    });
    Promise.all(productsArray).then(productsArray => res.send(productsArray));
};

