import type { quizCreateSchema } from "@shared/schemas/quiz.schema";
import type z from "zod";

export type QuizzesPageTabs = "created" | "starred" | "taken";

export type QuestionsTypes = {
    questionText: string;
    questionType: 
        | "multiple-choice" 
        | "identification" 
        | "enumeration" 
        | "essay" 
        | "fill-in-the-blank" 
        | "matching-type" 
        | "true-or-false";
    options?: string[];
    correctAnswers?: string[];
    timeLimit: number;
}[];

export type QuizAccessTypes = "public" | "private" | "class";

export type QuizTypes = {
    _id: string;
    title: string;
    description?: string;
    owner: string;
    access: QuizAccessTypes;
    quizKey: string;
    
    quizTimeLimit: number;
    maxAttempts: number;

    questions: QuestionsTypes;

    createdAt: string;
    updatedAt: string;
    
    __v: number;
};

export type QuizFormData = z.infer<typeof quizCreateSchema>;