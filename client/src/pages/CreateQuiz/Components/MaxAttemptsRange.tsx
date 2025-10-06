import type { QuizFormData } from "../../../lib/types"
import type { Path, UseFormRegister } from "react-hook-form"

type MaxAttemptsProps = {
    label: string;
    name: Path<QuizFormData>;
    register: UseFormRegister<QuizFormData>;
}

export default function MaxAttemptsRange({ label, name, register }: MaxAttemptsProps) {
    
    return (
        <div className="w-full">
            <label className="label mb-1">{label}</label>
            <input {...register(name, { valueAsNumber: true })} 
            type="range" min={0} max="5" className="range w-full" step="1" />
            <div className="flex justify-between px-2.5 mt-2 text-xs w-full">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span className="relative text-transparent">
                    <span className="absolute text-base-content w-20">
                        Unli-Try
                    </span>
                    0
                </span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
    )
}