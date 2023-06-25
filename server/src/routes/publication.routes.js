import { Router } from "express"
import {
    getPublications,
    getPublication,
    createPublication,
    updatePublication,
    deletePublication,
    publicationLike
} from "../controllers/publication.controllers.js"
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware.js"

const router = Router()

router.get("/publication", validateTokenMiddleware, getPublications)
router.get("/publication/:id", validateTokenMiddleware, getPublication)
router.post("/publication", validateTokenMiddleware, createPublication)
router.put("/publication/:id", validateTokenMiddleware, updatePublication)
router.delete("/publication/:id", validateTokenMiddleware, deletePublication)
router.put("/publication/:id/likes", validateTokenMiddleware, publicationLike)

export default router
