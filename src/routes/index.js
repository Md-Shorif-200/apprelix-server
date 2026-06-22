import express from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Apprelix API v1!"
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;