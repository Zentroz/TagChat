import { Router } from "express";
import { LoginUser } from '../controllers/user.controller.js'
const router = Router()

router.route("/login").post(LoginUser)

export default router