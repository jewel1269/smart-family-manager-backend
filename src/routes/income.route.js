import express from "express";
import { AddIncome, deleteIncome, getAllIncome } from "../controller/income.controller.js";
const router = express.Router();

router.post("/add", AddIncome);
router.get("/:email", getAllIncome);
router.delete("/delete/:id", deleteIncome);


export default router;
