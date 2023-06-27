import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createToken } from "../libs/jwt.js"
import jwt from "jsonwebtoken"
import { TOKEN_KEY } from "../config.js"

export const authRegister = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const userFound = await User.findOne({ email })

        if (userFound) {
            return res.status(400).json([["The email is alredy in use"]])
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        const saveUser = await newUser.save()

        const token = await createToken({ id: saveUser._id })

        res.cookie("token", token)

        res.json({
            id: saveUser._id,
            username: saveUser.username,
            email: saveUser.email,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const authLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const userFound = await User.findOne({ email })

        if (!userFound) return res.status(400).json([["User not found"]])

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) return res.status(400).json([["Invalid credentials"]])

        const token = await createToken({ id: userFound._id })

        res.cookie("token", token)

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) })
    return res.sendStatus(200)
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized" })

    jwt.verify(token, TOKEN_KEY, async (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" })

        const userFound = await User.findById(decoded.id)

        if (!userFound) return res.status(401).json({ message: "Unauthorized" })

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    })
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json([["User not found"]])

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
    })
}
