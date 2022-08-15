import { getProducts, getAllCategories, getProductsOfCategory } from '../models/products.js';
import getCarts from '../models/carts.js';
import { getUser } from '../models/users.js';


export const main = (_req, res) => {
    res.send('Santiago Hollmann Primer entregable');
};

export const getPrices = async (req, res) => {
    let { order } = req.query;
    let products = await getProducts();
    let productsList = [];
    productsList = products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
    }))
    if (order == 'desc') {
        productsList.sort((a, b) => b.price - a.price);
    } else {
        productsList.sort((a, b) => a.price - b.price);
    }
    res.send(productsList);
};

export const getExpensiveProducts = async (_req, res) => {
    let allCategories = await getAllCategories();
    let expensiveProducts = [];
    expensiveProducts = allCategories.map(async (category) => {
        let result = await getProductsOfCategory(category);
        result.sort((a, b) => b.price - a.price);

        return result[0];
    });
    Promise.all(expensiveProducts)
        .then(expensiveProducts => { res.send(expensiveProducts) });
};

export const getBigCarts = async (_req, res) => {
    let allCarts = await getCarts();
    let bigCarts = [];
    let bigCartsUsers = [];

    bigCarts = allCarts.filter(cart => cart.products.length > 2);

    bigCartsUsers = bigCarts.map(async cart => {
        const { username } = await getUser(cart.userId);
        return {
            username,
            cart
        };
    });
    Promise.all(bigCartsUsers).then(bigCartsUsers => res.send(bigCartsUsers));
};