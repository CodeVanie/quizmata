import { FormProvider, useForm } from "react-hook-form"
import { quizCreateSchema } from "@shared/schemas/quiz.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import type { QuizFormData } from "../../../lib/types";
import QuizDetails from "./QuizDetails";
import QuestionsSection from "./QuestionsSection";

const defaultValues: QuizFormData = {
    title: "",
    description: "",
    access: "public",
    owner: "[logged in user]",
    quizTimeLimit: 0,
    maxAttempts: 0,
    questions: [
        {
            questionText: "1 + 1 ?",
            questionType: "multiple-choice",
            options: ["3", "0", "1", "2"],
            correctAnswers: ["2"],
            timeLimit: 0
        }
    ]
}

export default function CreateQuizForm() {
    const methods = useForm<QuizFormData>({ 
        resolver: zodResolver(quizCreateSchema), 
        defaultValues
    });

    async function onSubmit(data: QuizFormData) {
        try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			console.log(data)

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
