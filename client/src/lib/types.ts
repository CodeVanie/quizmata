
export type QuizzesPageTabs = "created" | "saved" | "taken";

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
    correctAnswers: string[];
    timeLimit: number;
}[];

export type QuizTypes = {
    _id: string;
    title: string;
    description?: string;
    owner: string;
    access: "public" | "private" | "class";
    quizKey: string;
    
    quizTimeLimit?: number;
    maxAttempts?: number;

    questions: QuestionsTypes;

    createdAt: string;
    updatedAt: string;
    
    __v: number;
};