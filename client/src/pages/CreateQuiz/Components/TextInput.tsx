import type { QuizFormData } from "../../../lib/types"
import { useFormContext, type Path, type UseFormRegister } from "react-hook-form"

type TextInputProps = {
    label: string;
    name: Path<QuizFormData>;
    placeholder: string;
    register: UseFormRegister<QuizFormData>;
}

export default function TextInput({ label, name, placeholder, register }: TextInputProps) {
    const { formState: {errors}} = useFormContext<QuizFormData>();

    return (
        <div>
            <label className="label">{label}</label>
            <input {...register(name)} type="text" className={`input w-full text-xl ${errors.title?.message ? "border-red-600 text-red-600" : "focus:valid:input-success focus:valid:text-success"}`} placeholder={placeholder} required/>
            {errors.title?.message && 
                <p className="text-red-600 ml-3 font-light">{errors.title?.message}</p>
            }
        </div>
    )
}