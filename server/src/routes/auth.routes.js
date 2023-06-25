import { Router } from "express"
import {
    authRegister,
    authLogin,
    logout,
    profile,
    verifyToken
} from "../controllers/auth.controllers.js"
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"

const router = Router()

router.post("/register", validateSchema(registerSchema), authRegister)

router.post("/login", validateSchema(loginSchema), authLogin)

router.post("/logout", logout)

router.get("/verify", verifyToken)

router.get("/profile", validateTokenMiddleware, profile)

export default router
