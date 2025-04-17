import express from "express";
import { CreateSemester, getResult } from "../controller/semester.controller.js";
const router = express.Router();

router.post("/create", CreateSemester);
router.get("/:email", getResult);


export default router;
