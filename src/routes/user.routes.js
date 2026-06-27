import express from "express";
import { getAllUsers, getSingleUser, updateUser } from "../controllers/user/user.controllers.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.patch("/:id", updateUser);

export default router;
