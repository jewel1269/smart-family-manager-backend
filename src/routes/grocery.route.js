import express from "express";
import { AddGrocery, deleteGrocery, getAllGrocery } from "../controller/grocery.controller.js";
const router = express.Router();

router.post("/add", AddGrocery);
router.get("/:email", getAllGrocery);
router.delete("/delete/:id", deleteGrocery);


export default router;
