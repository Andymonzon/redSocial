import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import publicationRoutes from "./routes/publication.routes.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)

app.use("/api", authRoutes)
app.use("/api", publicationRoutes)

export default app
