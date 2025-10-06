import { createQuiz, deleteQuiz, getQuizzes, updateQuiz, updateQuizQuestion } from "../controllers/quizController";
import express from "express";
import zodValidate from "../middleware/validate";
import { questionUpdateSchema, quizCreateSchema, quizUpdateSchema } from "@shared/schemas/quiz.schema";

const router = express.Router();

router.get("/", getQuizzes);

router.post("/", zodValidate(quizCreateSchema), createQuiz);

router.put("/:id", zodValidate(quizUpdateSchema), updateQuiz);

router.put("/:id/questions/:questionId", zodValidate(questionUpdateSchema), updateQuizQuestion);

router.delete("/:id", deleteQuiz);

export default router;