import { questionUpdateSchema, quizCreateSchema, quizUpdateSchema } from '@shared/schemas/quizSchema.js';
import { createQuiz, deleteQuiz, getQuizzes, updateQuiz, updateQuizQuestion } from "../controllers/quizController.js";
import express from "express";
import zodValidate from "../middleware/validate.js";

const router = express.Router();

router.get("/", getQuizzes);

router.post("/", zodValidate(quizCreateSchema), createQuiz);

router.put("/:id", zodValidate(quizUpdateSchema), updateQuiz);

router.put("/:id/questions/:questionId", zodValidate(questionUpdateSchema), updateQuizQuestion);

router.delete("/:id", deleteQuiz);

export default router;