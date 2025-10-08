import type { questionSchema, quizCreateSchema } from "@shared/schemas/quiz.schema";
import type z from "zod";

export type QuizzesPageTabs = "created" | "starred" | "taken";

export type QuestionsTypes = {
    _id: string;
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
    questionPoint: number;
    timeLimit: number;
}[];

export type QuizAccessTypes = "public" | "private" | "class";
export type QuizQuestionOrder = "ordered" | "reversed" | "shuffle";

export type QuizTypes = {
    _id: string;
    title: string;
    description?: string;
    owner: string;
    access: QuizAccessTypes;
    quizKey: string;
    
    quizTimeLimit: number;
    maxAttempts: number;

    questionOrder: QuizQuestionOrder;
    questions: QuestionsTypes;

    passingScore: number;

    createdAt: string;
    updatedAt: string;
    
    __v: number;
};

export type QuizFormData = z.infer<typeof quizCreateSchema>;
export type QuestionFormData = z.infer<typeof questionSchema>;