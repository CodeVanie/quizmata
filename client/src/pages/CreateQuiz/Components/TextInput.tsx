import type { QuizFormData } from "../../../lib/types"
import type { Path, UseFormRegister } from "react-hook-form"

type TextInputProps = {
    label: string;
    name: Path<QuizFormData>;
    placeholder: string;
    register: UseFormRegister<QuizFormData>;
}

export default function TextInput({ label, name, placeholder, register }: TextInputProps) {
    
    return (
        <div>
            <label className="label">{label}</label>
            <input {...register(name)} type="text" className="input w-full" placeholder={placeholder} />
        </div>
    )
}