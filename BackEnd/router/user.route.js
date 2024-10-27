import express from "express";
import { login, signup } from "../controler/user.controller.js";
const router = express.Router();

// POST route for user signup
router.post("/signup", signup);
router.post("/login", login);

export default router;
