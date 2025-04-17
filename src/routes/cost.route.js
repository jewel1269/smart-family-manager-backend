import express from "express";
import { AddCost, deleteCost, getAllCost } from "../controller/cost.controller.js";
const router = express.Router();

router.post("/add", AddCost);
router.get("/:email", getAllCost);
router.delete("/delete/:id", deleteCost);


export default router;
