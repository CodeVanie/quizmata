import type { QuizFormData } from "client/src/lib/types";
import { useFormContext } from "react-hook-form";

export default function QuestionTypeSelect({ index }: { index: number }) {
    const { register } = useFormContext<QuizFormData>();
    
    return (
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
    )
}