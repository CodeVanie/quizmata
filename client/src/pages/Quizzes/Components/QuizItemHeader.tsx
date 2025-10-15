import { PenSquareIcon, Star } from "lucide-react";
import { capitalizeWords, getAccessThemes } from "../../../lib/utils";
import type { QuizAccessTypes } from "../../../lib/types";
import DeleteButton from "../../../shared/components/Buttons/DeleteButton";

export default function QuizItemHeader({ quizAccess }: { quizAccess: QuizAccessTypes }) {
    const { badgeTheme, textTheme, fillTheme } = getAccessThemes(quizAccess);

    return (
        <div className="card-actions justify-between">
            <div className="flex gap-x-1 sm:gap-x-2">
                <div className={`badge badge-soft font-bold max-sm:text-[10px] ${badgeTheme}`}>
                    {capitalizeWords(quizAccess)}
                </div>
                <button className={`btn btn-soft btn-xs rounded-full group active:text-base-100 max-sm:text-[10px] ${textTheme}`}>
                    <Star className={`sm:size-4 size-3 ${fillTheme}`}/> Star
                </button>
            </div>

            <div className="flex gap-x-1 sm:gap-x-2">
                <button className="btn btn-soft btn-xs btn-warning max-sm:text-[10px]">
                    Edit<PenSquareIcon className="size-4"/>
                </button>
                <DeleteButton IconSize="4" className="btn-xs text-red-500 hover:bg-red-500 hover:text-base-100 max-sm:text-[10px]">
                    Delete
                </DeleteButton>
            </div>
        </div>
    )
}
