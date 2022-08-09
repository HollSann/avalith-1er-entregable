import getUsers from "../models/users.js"

export const getAllUsers = async (_req, res) => {
    return res.send(await getUsers())
}

export const getUserById = async (req, res) => {
    const users = await getUsers()
    const user = users.find(e => e.id == req.params.id)
    res.send(user)
}

