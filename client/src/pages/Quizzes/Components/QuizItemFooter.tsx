import { Clipboard } from "lucide-react";
import type { QuizTypes } from "../../../lib/types";
import { getAccessThemes, handleClipboardClick } from "../../../lib/utils";

export default function QuizItemFooter({ quiz }: { quiz: QuizTypes }) {
    const { badgeTheme, textTheme } = getAccessThemes(quiz.access);
    const { maxAttempts, quizTimeLimit, questions, quizKey } = quiz;

    return (
        <div className="card-actions justify-between">
            <div className="flex sm:gap-x-2 gap-x-1">
                <div className={`badge badge-soft badge-sm max-sm:text-[10px] ${badgeTheme}`}>
                    {maxAttempts !== 0 ? maxAttempts === 1 ? 
                    "1 Attempt" : `${maxAttempts} Attemps` : "Unli-Try"}
                </div>

                <div className={`badge badge-soft badge-sm max-sm:text-[10px] ${badgeTheme}`}>
                    {quizTimeLimit !== 0 ? quizTimeLimit === 1 ? 
                    `${quizTimeLimit} minute` : `${quizTimeLimit} mins` : "No Timer"}
                </div>

                <div className={`badge badge-soft badge-sm max-sm:text-[10px] ${badgeTheme}`}>
                    {questions.length} Questions
                </div>
            </div>

            <button onClick={() => handleClipboardClick("quizkey", quizKey)} 
            className={`btn btn-soft btn-xs rounded-full group active:text-base-100 ${textTheme}`}>
                <span className="hidden group-hover:inline">Copy Quiz Key</span>
                <Clipboard className="size-4"/>
            </button>
        </div>
    )
}
