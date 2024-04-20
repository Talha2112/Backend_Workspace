import { Router } from "express";
import register from "../controllers/user.register";
const router = Router()

router.post("/auth/register", register)

export default router