import express from "express";
import { CreateSemester, deleteSemester, getResult } from "../controller/semester.controller.js";
const router = express.Router();

router.post("/create", CreateSemester);
router.get("/:email", getResult);
router.delete("/delete/:id", deleteSemester);


export default router;
