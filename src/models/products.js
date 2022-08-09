import fetch from 'node-fetch';

export const getProducts = async (_req, res, _next) => fetch('https://fakestoreapi.com/products/').then(res => res.json())

export const getAllCategories = async (_req, res, _next) => {
    return await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())


}
// export const getProductsCategorie = async (req, res, _next) => {
//     return fetch(`https://fakestoreapi.com/products/category/${req.params.category}`)
//         .then(res => res.json())
// }