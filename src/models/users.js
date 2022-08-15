import fetch from "node-fetch";

export const getUsers = async (_req, res) => fetch('https://fakestoreapi.com/users').then(res => res.json())

export const getUser = async (userId) => fetch(`https://fakestoreapi.com/users/${userId}`).then(res => res.json())
