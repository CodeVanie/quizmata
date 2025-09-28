import { Request, Response } from "express";

export function getQuizzes(req: Request, res: Response) {
    res.send("You have 10 quizzes.");
}

export function createQuiz(req: Request, res: Response) {
    res.status(201).json({message: "Quiz created successfully!"});
}

export function updateQuiz(req: Request, res: Response) {
    res.status(200).json({message: "Quiz updated successfully!"});
}

export function deleteQuiz(req: Request, res: Response) {
    res.status(200).json({message: "Quiz deleted successfully!"});
}