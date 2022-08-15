import fetch from "node-fetch";
import getCarts from "../models/carts.js";

export const getAllCarts = async (_req, res) => {
    return res.send(await getCarts());
};

export const getLimitAndSort = async (req, res) => {
    let { limit } = req.query;
    let { sort } = req.query;
    if (sort === undefined) {
        return await fetch(`https://fakestoreapi.com/carts?limit=${limit}`)
            .then(res => res.json())
            .then(json => res.send(json));

    } else {
        return await fetch(`https://fakestoreapi.com/carts?sort=${sort}`)
            .then(res => res.json())
            .then(json => res.send(json));
    };
};

export const getCartById = async (req, res) => {
    const carts = await getCarts();
    const { id } = req.params
    if (id > 6) {
        res.status(400).send('Bad request (number of carts found: 6')
    } else {
        const cart = carts.find(e => e.id == id);
        res.send(cart);
    }
};

