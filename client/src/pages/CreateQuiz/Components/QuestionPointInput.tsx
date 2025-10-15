import { MinusIcon, PlusIcon } from "lucide-react";

type QuestionPointProps = {
    value: number;
    onChange: (value: number) => void;
}

export default function QuestionPointInput({ value, onChange }: QuestionPointProps) {

    return (
        <div className="flex items-center h-10 text-base text-secondary text-nowrap rounded-field overflow-hidden bg-base-100 pl-2 border border-secondary">
            <span className="mr-2 w-18">Points:</span>
            <div className={`content-center w-14 text-secondary-content h-full bg-secondary rounded-l-field ${
                    value <= 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"
                }`}>
                <MinusIcon onClick={() => {if (value > 1) onChange(value - 1);}} className="size-5 mx-auto" />
            </div>
            <p className="text-xl text-center select-none grow bg-base-100">
                {Number.isNaN(value) ? 0 : value}
            </p>
            <div className="content-center w-14 hover:scale-105 cursor-pointer text-secondary-content h-full bg-secondary">
                <PlusIcon onClick={() => onChange((value || 0) + 1)} className="size-5 mx-auto"/>
            </div>
        </div>
    )
}