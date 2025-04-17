import express from "express";
import { Login, registerUser, SingleUser } from "../controller/user.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", Login);
router.get("/:email", SingleUser);

export default router;
