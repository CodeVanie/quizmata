import { getAccessThemes } from "../../../lib/utils";
import type { QuizFormData } from "../../../lib/types"
import { useWatch, type Control, type Path, type UseFormRegister } from "react-hook-form"

type AccessSelectProps = {
    label: string;
    name: Path<QuizFormData>;
    register: UseFormRegister<QuizFormData>;
    control: Control<QuizFormData>;
}

export default function AccessSelect({ label, name, register, control }: AccessSelectProps) {
    const access = useWatch({
        control,
        name: "access",
        defaultValue: "public"
    });
    const { selectTheme } = getAccessThemes(access);
    
    return (
        <div>
            <label className="label">{label}</label>
            <select {...register(name)} className={`select w-full text-xl ${selectTheme}`}>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="class">Class</option>
            </select>
        </div>
    )
}