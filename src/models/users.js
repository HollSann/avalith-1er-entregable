import fetch from "node-fetch";

const getUsers = async (_req, res) => fetch('https://fakestoreapi.com/users').then(res => res.json())

export default getUsers;