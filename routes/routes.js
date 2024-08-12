import express from "express";
const router = express.Router();
import { createNote,getNoteById,updateNote,queryNoteByTitleSubstring } from "../controllers/note.controller.js";

router.post("/notes",createNote);
router.get("/notes/:id",getNoteById);
router.get("/notes",queryNoteByTitleSubstring)
router.put("/notes/:id",updateNote);
export default router;