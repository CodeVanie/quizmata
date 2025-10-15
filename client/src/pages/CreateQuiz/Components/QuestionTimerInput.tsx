import { MinusIcon, PlusIcon } from "lucide-react";
import { useWatch } from "react-hook-form";

type QuestionTimerProps = {
    value: number;
    onChange: (value: number) => void;
}

export default function QuestionTimerInput({ value, onChange }: QuestionTimerProps) {
    const quizTimeLimit = useWatch({
        name: "quizTimeLimit"
    });

    return (
        <div className={`flex items-center h-10 text-base text-secondary text-nowrap bg-base-100 pl-2 rounded-field border-secondary border overflow-hidden ${quizTimeLimit && "opacity-50 cursor-not-allowed"}`}>
            <span className="mr-2 w-18">Timer:</span>
            <div className={`content-center w-14 text-secondary-content h-full bg-secondary rounded-l-field ${
                    value <= 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"
                }`}>
                <MinusIcon onClick={() => {if (value > 4) onChange(value - 5);}} className="size-5 mx-auto" />
            </div>
            <p className="text-xl text-center select-none grow bg-base-100">
                {value === 0 ? value : value + "s"}
            </p>
            <div className="content-center w-14 hover:scale-105 cursor-pointer text-secondary-content h-full bg-secondary">
                <PlusIcon onClick={() => onChange((value || 0) + 5)} className="size-5 mx-auto"/>
            </div>
        </div>
    )
}