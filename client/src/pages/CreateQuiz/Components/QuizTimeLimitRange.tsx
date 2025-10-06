import type { QuizFormData } from "../../../lib/types"
import type { Path, UseFormRegister } from "react-hook-form"

type QuizTimeLimitProps = {
    label: string;
    name: Path<QuizFormData>;
    register: UseFormRegister<QuizFormData>;
}

export default function QuizTimeLimitRange({ label, name, register }: QuizTimeLimitProps) {
    
    return (
        <div className="w-full">
            <label className="label mb-1">{label}</label>
            <input {...register(name, { valueAsNumber: true })} 
            type="range" min={0} max="180" className="range w-full" step="1" />
            <div className="flex justify-between px-2.5 mt-2 text-xs w-full">
                <span>|</span>
                <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span>No Timer</span>
                <span>3 Hours</span>
            </div>
        </div>
    )
}