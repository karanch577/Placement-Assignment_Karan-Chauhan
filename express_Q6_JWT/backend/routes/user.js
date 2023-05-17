import express from 'express'
import { dashboard, signin, signup } from '../controllers/user.controller.js'

const router = express.Router()

router.get("/dashboard", dashboard)
router.post("/register", signup)
router.post("/login", signin)


export default router