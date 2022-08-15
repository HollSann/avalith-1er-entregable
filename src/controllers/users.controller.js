import fetch from "node-fetch";
import { getUsers } from "../models/users.js";

export const getAllUsers = async (req, res) => {
    let users = await getUsers()
    return res.send(users)
};

export const getUserById = async (req, res) => {
    const { id } = req.params
    const users = await getUsers();
    if (id > 10) {
        res.status(400).send('Bad request (number of users found:10)')
    } else {
        const user = users.find(e => e.id == id);
        res.send(user);
    }

};

export const getFirstUsers = async (req, res) => {
    let users = await getUsers();
    const firstUsers = [];

    users = users.map(user => {
        if (user.id <= 3) {
            firstUsers.push(user);
        };
    });
    res.send(firstUsers);
};

export const getLimitAndSort = async (req, res) => {
    let { limit } = req.query;
    let { sort } = req.query;
    if (sort === undefined) {
        return await fetch(`https://fakestoreapi.com/users?limit=${limit}`)
            .then(res => res.json())
            .then(json => res.send(json));

    } else {
        return await fetch(`https://fakestoreapi.com/users?sort=${sort}`)
            .then(res => res.json())
            .then(json => res.send(json));
    };
};

