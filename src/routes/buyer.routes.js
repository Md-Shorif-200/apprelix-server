import express from "express";
import { createRfq, getAllRfqs } from "../controllers/buyer/rfqs-controller.js";

const router = express.Router();

router.post("/rfq", createRfq);
router.get("/rfq", getAllRfqs);

export default router;
