import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/auth.controller.js";
import { jwtInterceptor } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", jwtInterceptor, getAllUsers);

export default router;
