import jwt from "jsonwebtoken"
import { TOKEN_KEY } from "../config.js"

export const validateTokenMiddleware = (req, res, next) => {
    const { token } = req.cookies

    if (!token)
        return res.status(401).json({ message: "No token, unauthorized" })

    jwt.verify(token, TOKEN_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" })

        req.user = decoded

        next()
    })
}
