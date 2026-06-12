import express from "express";
import { getAllUsers, getSingleUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

export default router;
