import express from "express";
import { AddIncome, getAllIncome } from "../controller/income.controller.js";
const router = express.Router();

router.post("/add", AddIncome);
router.get("/:email", getAllIncome);


export default router;
