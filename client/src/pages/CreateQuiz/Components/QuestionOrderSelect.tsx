import type { QuizFormData } from "client/src/lib/types";
import { useFormContext } from "react-hook-form";

export default function QuestionOrderSelect() {
    const { register } = useFormContext<QuizFormData>();

    return (
        <label data-tip="Set the order of the questions when users take your quiz." 
            className="select select-neutral w-full tooltip tooltip-neutral">
            <span className="label">Order</span>
            <select {...register("questionOrder")} className="select">
                <option value="ordered">Normal Order</option>
                <option value="reversed">Reversed Order</option>
                <option value="shuffle">Shuffled</option>
            </select>
        </label>
    )
}