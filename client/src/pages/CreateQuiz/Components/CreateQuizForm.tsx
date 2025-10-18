import { FormProvider, useForm } from "react-hook-form"
import { quizCreateSchema } from "@shared/schemas/quizSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import type { QuestionFormData, QuizFormData } from "../../../lib/types";
import QuizDetails from "./QuizDetails";
import QuestionsSection from "./QuestionsSection";

export const defaultQuestion: QuestionFormData = {
    questionText: "Who's the best protagonist?",
    questionType: "multiple-choice",
    options: [
        "Monkey D. Luffy",
        "Strawhat Luffy",
        "Captain Luffy",
        "All of the above"
    ],
    correctAnswers: ["All of the above"],
    questionPoint: 1,
    timeLimit: 0
}
const defaultValues: QuizFormData = {
    title: "",
    description: "",
    access: "public",
    owner: "[logged in user]",
    quizTimeLimit: 0,
    maxAttempts: 0,
    questionOrder: "ordered",
    questions: [defaultQuestion],
    passingScore: 1
}

export default function CreateQuizForm() {
    // console.log("CreateQuizForm Rendered!");
    const methods = useForm({ 
        resolver: zodResolver(quizCreateSchema), 
        mode: "onChange",
        defaultValues
    });

    async function onSubmit(data: QuizFormData) {
        try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			console.log(data);
			// reset();
		} catch (error) {
			console.error("Error submitting form:", error);
		}
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="px-3 flex flex-col justify-center gap-y-3">
                <QuizDetails />
                <QuestionsSection />
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </FormProvider>
    )
}
