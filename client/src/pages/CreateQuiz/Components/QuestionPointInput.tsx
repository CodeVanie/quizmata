import { MinusIcon, PlusIcon } from "lucide-react";

type QuestionPointProps = {
    value: number;
    onChange: (value: number) => void;
}

export default function QuestionPointInput({ value, onChange }: QuestionPointProps) {

    return (
        <div className="flex gap-x-1 items-center text-lg text-secondary text-nowrap">
            Question Points:
            <div className="flex items-center border border-transparent rounded-field overflow-hidden">
                <MinusIcon onClick={() => {
                    if (value > 1) onChange(value - 1);
                }}
                className={`size-8 stroke-secondary-content bg-secondary ${
                    value <= 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"
                }`}
                />
                <p className="text-xl w-10 text-center border-y select-none">
                    {Number.isNaN(value) ? 0 : value}
                </p>
                <PlusIcon onClick={() => onChange((value || 0) + 1)} className="size-8 hover:scale-105 cursor-pointer stroke-secondary-content bg-secondary"/>
            </div>
        </div>
    )
}