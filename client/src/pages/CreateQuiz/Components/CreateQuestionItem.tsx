import type { QuizFormData } from "client/src/lib/types";
import { Controller, useFormContext } from "react-hook-form"
import QuestionPointInput from "./QuestionPointInput";
import QuestionTypeSelect from "./QuestionTypeSelect";
import DeleteButton from "../../../shared/components/Buttons/DeleteButton";
import QuestionTimerInput from "./QuestionTimerInput";

type QuestionItemProps = {
    index: number;
    remove: (index: number) => void;
}

export default function CreateQuestionItem({ index, remove }: QuestionItemProps) {
    const { register, control } = useFormContext<QuizFormData>();
    
    return (
        <fieldset className="fieldset border-secondary bg-secondary-content rounded-box border p-3 w-full space-y-3">
            <DeleteButton onDelete={() => remove(index)} IconSize="6" className="bg-red-500/90 text-secondary-content hover:bg-red-500 active:bg-red-500">
                <span className="text-xl font-bold">Remove</span>
            </DeleteButton>
            <div className="grid grid-cols-1 gap-1">
                <Controller name={`questions.${index}.questionPoint`} control={control} render={
                    ({ field }) => <QuestionPointInput value={field.value} onChange={field.onChange} />
                } />
                <Controller name={`questions.${index}.timeLimit`} control={control} render={
                    ({ field }) => <QuestionTimerInput value={field.value} onChange={field.onChange} />
                } />
            </div>
            <div className="grid grid-cols-1 gap-1">
                <QuestionTypeSelect index={index} />
                <label htmlFor={`questions.${index}.questionText`} className="input input-secondary w-full">
                    <input {...register(`questions.${index}.questionText`)} type="text" placeholder="Add a question title" className="input" />
                </label>
            </div>
        </fieldset>
    )
}