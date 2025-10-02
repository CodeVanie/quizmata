import { Clipboard, PenSquareIcon, Trash2Icon } from "lucide-react";
import type { QuizTypes } from "../../lib/types";
import capitalizeWords from "../../lib/utils";

export default function QuizItem({ item }: { item: QuizTypes}) {
    const createdDate = new Date(item.createdAt);
    const ThreeDaysBefore = new Date();
    ThreeDaysBefore.setDate(ThreeDaysBefore.getDate()-3);
    const isNew = createdDate > ThreeDaysBefore;
    const badgeTheme = item.access === "private" ? "badge-primary" : 
            item.access === "class" ? "badge-info" : "badge-success";
    console.log(item.description);
    return (
        <div className="card card-md shadow-sm bg-base-content/25">
            <div className="card-body">
                <div className="card-actions justify-between">
                    <div className="flex gap-x-2">
                        <div className={`badge badge-soft font-bold ${badgeTheme}`}>
                            {capitalizeWords(item.access)}
                        </div>
                        <button className={`btn btn-soft btn-xs rounded-full group active:text-base-100 
                            ${item.access === "private" ? "text-primary active:bg-primary" : 
                            item.access === "class" ? "text-info active:bg-info" : "text-success active:bg-success"}`}>
                            <Clipboard className="size-4"/>
                            <span className="hidden group-hover:inline">Copy Quiz Key</span>
                        </button>
                    </div>

                    <div className="flex gap-x-2">
                        <button className="btn btn-soft btn-xs btn-warning">
                            Edit<PenSquareIcon className="size-4"/>
                        </button>
                        <button className="btn btn-soft btn-xs text-red-500 hover:bg-red-500 hover:text-base-100">
                            Delete<Trash2Icon className="size-4"/>
                        </button>
                    </div>
                </div>
                <h3 className="card-title">
                    {item.title}
                    {isNew && 
                    <div className={`badge badge-sm mb-1 ${badgeTheme}`}>
                        NEW!
                    </div>}
                </h3>
                <p className={`${!item.description && "text-base-content/50"}`}>
                    {item.description || "No Description"}
                </p>
                <div className="card-actions justify-end">
                    <div className="flex gap-x-2">
                        <div className={`badge badge-soft badge-sm ${badgeTheme}`}>
                            {item.maxAttempts ? `${item.maxAttempts} Attempts` : "Unlimited"}
                        </div>

                        <div className={`badge badge-soft badge-sm ${badgeTheme}`}>
                            {item.quizTimeLimit ? `${item.quizTimeLimit} mins` : "No Timer"}
                        </div>

                        <div className={`badge badge-soft badge-sm ${badgeTheme}`}>
                            {item.questions.length} Questions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}