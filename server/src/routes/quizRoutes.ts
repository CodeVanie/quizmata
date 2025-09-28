import { createQuiz, deleteQuiz, getQuizzes, updateQuiz } from "../controllers/quizController";
import express from "express";

const router = express.Router();

router.get("/", getQuizzes);

router.post("/", createQuiz)

router.put("/:id", updateQuiz)

router.delete("/:id", deleteQuiz)

export default router;