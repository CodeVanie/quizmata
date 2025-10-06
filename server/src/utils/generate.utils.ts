import crypto from "crypto";
import Quiz from "../models/Quiz";

export async function generateUniqueQuizKey(length = 30): Promise<string> {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const generate = () => {
        const randomBytes = crypto.randomBytes(length);
        return Array.from(randomBytes, b => chars[b % chars.length]).join("");
    };

    let quizKey: string;
    let existingQuiz;
    do {
        quizKey = generate();
        existingQuiz = await Quiz.findOne({ quizKey });
    } while (existingQuiz);

    return "quizkey_" + quizKey;
}