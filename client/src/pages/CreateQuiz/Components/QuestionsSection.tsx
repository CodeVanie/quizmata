import { useFieldArray, useFormContext } from "react-hook-form";
import FieldSetWrapper from "../../../layouts/Quiz/FieldSetWrapper";
import QuestionOrderSelect from "./QuestionOrderSelect";
import CreateQuestionItem from "./CreateQuestionItem";
import { defaultQuestion } from "./CreateQuizForm";
import NumberInput from "./NumberInput";

export default function QuestionsSection() {
    // console.log("QuestionsSection Rendered!");
    const { control } = useFormContext();
    const { fields, append, prepend, remove } = useFieldArray({
        control,
        name: "questions"
    });

    return (
        <FieldSetWrapper title="Questions">
            <div className="grid grid-cols-1 gap-5">
                <QuestionOrderSelect />
                <button type="button" onClick={() => prepend(defaultQuestion)} className="btn btn-info flex-1 text-lg font-bold">
                    Add Question
                </button>
            </div>
            <section className="space-y-2">
                {fields.map((field, index) => (
                    <CreateQuestionItem key={field.id} index={index} remove={remove} />
                ))}
            </section>
            <div className="grid grid-cols-1 gap-5">
                <button type="button" onClick={() => append(defaultQuestion)} className={`btn btn-info flex-1 text-lg font-bold ${fields.length === 0 && "hidden"}`}>
                    Add Question
                </button>
                <NumberInput />
            </div>
            
        </FieldSetWrapper>
    )
};