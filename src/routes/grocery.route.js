import express from "express";
import { AddGrocery, getAllGrocery } from "../controller/grocery.controller.js";
const router = express.Router();

router.post("/add", AddGrocery);
router.get("/:email", getAllGrocery);


export default router;
