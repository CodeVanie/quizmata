import { useEffect } from "react";
import type { QuizFormData } from "../../../lib/types";
import { useFormContext } from "react-hook-form"

export default function NumberInput() {
    // console.log("NumberInput Rendered!");
    const { register, watch, trigger, formState: {errors} } = useFormContext<QuizFormData>();
    const questions = watch("questions");
    const totalPoints = questions.reduce((sum, { questionPoint }) => sum + questionPoint, 0);

    useEffect(() => {
        trigger("passingScore");
    }, [JSON.stringify(questions), trigger]);

    return (
        <div>
            <div className="flex gap-x-1">
                <label className={`input flex-1 ${errors.passingScore?.message ? "border-red-600 text-red-600" : "input-success text-success"}`}>
                    <span className="text-base-content">Passing Score:</span>
                    <input {...register("passingScore")} 
                    type="number" className="input text-xl" />
                </label>
                <div className="border-2 border-success border-dashed flex-1 text-success text-lg text-center content-center px-2 rounded-field">{`Total Points: ${totalPoints}`}</div>
            </div>
            {errors.passingScore?.message && 
                <p className="text-red-600 ml-3 font-light">{errors.passingScore?.message}</p>
            }
        </div>
    )
}