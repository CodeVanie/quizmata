import { Request, Response } from "express";
import Quiz from "../models/Quiz";

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
        const { title, owner, access, quizKey, questions } = req.body;
        const newQuiz = new Quiz({title, owner, access, quizKey, questions});

        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (error) {
        console.log("Error in createQuiz controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateQuiz(req: Request, res: Response) {
    try {
        const { title, owner, access, quizKey, questions } = req.body;
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            req.params.id, 
            { title, owner, access, quizKey, questions }, 
            { new: true }
        );

        if (!updatedQuiz) return res.status(400).json({message: "Quiz not found"});

        res.status(200).json(updatedQuiz);
    } catch (error) {
        console.log("Error in updateQuiz controller", error);
        res.status(500).json({message: "Internal server error"});
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