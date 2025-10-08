import { Request, Response } from "express";
import Quiz from "../models/Quiz";
import { generateUniqueQuizKey } from "../utils/generate.utils";

export async function getQuizzes(_req: Request, res: Response) {
    try {
        const quizzes = await Quiz.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
        res.status(200).json(quizzes);
    } catch (error) {
        console.log("Error in getQuizzes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createQuiz(req: Request, res: Response) {
    try {
        const quizKey = await generateUniqueQuizKey();
        const newQuiz = { ...req.body, quizKey };

        const savedQuiz = await Quiz.create(newQuiz);
        res.status(201).json(savedQuiz);
    } catch (error) {
        console.error("Error in createQuiz controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateQuiz(req: Request, res: Response) {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );

        if (!updatedQuiz) return res.status(400).json({message: "Quiz not found"});

        res.status(200).json(updatedQuiz);
    } catch (error) {
        console.log("Error in updateQuiz controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateQuizQuestion(req: Request, res: Response) {
    try {
        const { id: quizId, questionId } = req.params;
        const updatedQuestion = req.body;

        const quiz = await Quiz.findById(quizId);
        if (!quiz) return res.status(404).json({ message: "Quiz not found" });

        const question = quiz.questions.find(q => q._id.toString() === questionId);
        if (!question) return res.status(404).json({ message: "Question not found" });

        Object.assign(question, updatedQuestion);

        const savedQuiz = await quiz.save();
        res.status(200).json(savedQuiz);
    } catch (error) {
        console.error("Error updating question:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteQuiz(req: Request, res: Response) {
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    
        if (!deletedQuiz) return res.status(400).json({message: "Quiz not found"});

        res.status(200).json({message: "Quiz deleted successfully!"});
    } catch (error) {
        console.log("Error in deleteQuiz controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}