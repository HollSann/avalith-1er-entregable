import { getProducts, getAllCategories } from '../models/products.js'


export const getAllProducts = async (_req, res) => res.send(await getProducts())

export const getProductById = async (req, res) => {
    let products = await getProducts()
    let product = products.find(e => e.id == req.params.id)
    res.send(product)
    next()

}

export const getCategories = async (req, res, next) => {
    const products = await getProducts()
    const categories = await getAllCategories()

    categories.map(categorie => {
        categorie,
            products
    })
    res.send(categories)

}



