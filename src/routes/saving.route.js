import express from "express";
import { CreateSavingOrLoad, deleteSavingOrLoad, getSavingOrLoad } from "../controller/saving.eontroller.js";
const router = express.Router();

router.post("/add", CreateSavingOrLoad);
router.get("/:email", getSavingOrLoad);
router.delete("/delete/:id", deleteSavingOrLoad);


export default router;
