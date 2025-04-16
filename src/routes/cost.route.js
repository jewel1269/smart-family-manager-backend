import express from "express";
import { AddCost, getAllCost } from "../controller/cost.controller.js";
const router = express.Router();

router.post("/add", AddCost);
router.get("/:email", getAllCost);


export default router;
