import { useFieldArray } from "react-hook-form";
import FieldSetWrapper from "../../../layouts/Quiz/FieldSetWrapper";
import QuestionOrderSelect from "./QuestionOrderSelect";
import CreateQuestionItem from "./CreateQuestionItem";

const defaultQuestion = {
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

export default function QuestionsSection() {
    const { fields, append, prepend } = useFieldArray({
        name: "questions"
    })

    return (
        <FieldSetWrapper title="Questions">
            <QuestionOrderSelect />
            {fields.length > 0 && 
                <button onClick={() => prepend(defaultQuestion)} className="btn btn-secondary">
                    Add Question
                </button>
            }
            <section className="space-y-2">
                {fields.map((field, index) => (
                    <CreateQuestionItem key={field.id} index={index} />
                ))}
            </section>
            <button onClick={() => append(defaultQuestion)} className="btn btn-secondary">
                Add Question
            </button>
        </FieldSetWrapper>
    )
}