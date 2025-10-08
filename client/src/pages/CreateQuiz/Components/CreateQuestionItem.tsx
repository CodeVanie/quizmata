import type { QuizFormData } from "client/src/lib/types";
import { Controller, useFormContext } from "react-hook-form"
import QuestionPointInput from "./QuestionPointInput";

export default function CreateQuestionItem({ index }: { index: number }) {
    const { register, control } = useFormContext<QuizFormData>();
    
    return (
        <fieldset className="fieldset border-secondary bg-secondary-content rounded-box border p-4 w-full">
            <div className="flex gap-1">
                <Controller name={`questions.${index}.questionPoint`} control={control} render={
                    ({ field }) => <QuestionPointInput value={field.value} onChange={field.onChange} />
                } />
                <label htmlFor="questionType" className="select select-secondary sm:basis-8/10 w-full">
                    <span className="label">Type:</span>
                    <select {...register(`questions.${index}.questionType`)} defaultValue="Question Types" className="select w-full text-nowrap">
                        <option disabled={true}>Question Types</option>
                        <option value="multiple-choice">Multiple-Choice</option>
                        <option value="identification">Identification</option>
                        <option value="enumeration">Enumeration</option>
                        <option value="essay">Essay</option>
                        <option value="fill-in-the-blank">Fill-in-the-blank</option>
                        <option value="matching-type">Matching-Type</option>
                        <option value="true-or-false">True-or-False</option>
                    </select>
                </label>
            </div>
            <label htmlFor={`questions.${index}.questionText`} className="input input-secondary w-full">
                <span className="label">Title:</span>
                <input {...register(`questions.${index}.questionText`)} type="text" placeholder="Add a question title" className="input" />
            </label> 
        </fieldset>
    )
}