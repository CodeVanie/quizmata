import type { QuizFormData } from "../../../lib/types"
import type { Path, UseFormRegister } from "react-hook-form"

type DescriptionProps = {
    label: string;
    name: Path<QuizFormData>;
    placeholder: string;
    register: UseFormRegister<QuizFormData>;
}

export default function DescriptionTextArea({ label, name, placeholder, register }: DescriptionProps) {
    
    return (
        <div>
            <label className="label">{label}</label>
            <textarea {...register(name)} className="textarea h-24 w-full text-xl" placeholder={placeholder} />
        </div>
    )
}