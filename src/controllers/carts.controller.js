
import getCarts from "../models/carts.js";

export const getAllCarts = async (_req, res) => {
    return res.send(await getCarts())
}
export const getCartById = async (req, res) => {
    const carts = await getCarts()
    const cart = carts.find(e => e.id == req.params.id)
    res.send(cart)
}

