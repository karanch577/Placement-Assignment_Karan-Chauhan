import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()

import userRoutes from "./routes/user.js"
import connectDb from "./config/db.js"

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    credentials: true,
    origin: "*"
}))
app.use(cookieParser())

// routes
app.use("/api/user", userRoutes)

const port = process.env.PORT || 8000

app.get("/", (_, res) => {
    res.status(200).send("Hello from the server")
})

// connect db
connectDb()

// if db is connect and there is a fatal error

app.on("error", (error) => {
    console.log("error", error)
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})