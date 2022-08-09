import fetch from "node-fetch";

const getCarts = (_req, res) => fetch('https://fakestoreapi.com/carts').then(res => res.json())

export default getCarts;