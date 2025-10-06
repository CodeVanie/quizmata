import type { QuizTypes } from "../../../lib/types";
import { getAccessThemes, isNewData } from "../../../lib/utils";
import QuizItemWrapper from "../../../layouts/Quiz/QuizItemWrapper";
import QuizItemHeader from "./QuizItemHeader";
import QuizItemFooter from "./QuizItemFooter";

export default function QuizItem({ item }: { item: QuizTypes }) {
    const { badgeTheme } = getAccessThemes(item.access);

    return (
        <QuizItemWrapper>
            <QuizItemHeader quizAccess={item.access}/>
            <h3 className="card-title">
                {item.title}
                {isNewData(item.createdAt) && 
                <div className={`badge badge-sm mb-1 ${badgeTheme}`}>
                    NEW!
                </div>}
            </h3>
            <p className={`${!item.description && "text-base-content/50"}`}>
                {item.description || "No Description"}
            </p>
            <QuizItemFooter quiz={item} />
        </QuizItemWrapper>
    )
}