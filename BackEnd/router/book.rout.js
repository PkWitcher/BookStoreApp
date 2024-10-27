import express from "express"; // Added quotes around express
import { getbook } from "../controler/book.controler.js"; // Ensure the correct spelling of 'controller'

const router = express.Router();

router.get("/", getbook);

export default router;
