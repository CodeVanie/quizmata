import { useState } from "react"
import QuizzesSideBar from "./QuizzesSideBar";

type QuizzesPageTabs = "my-quizzes" | "saved-quizzes" | "quizzes-taken";

export default function QuizzesPage() {
    const [selectedTab, setSelectedTab] = useState<QuizzesPageTabs>("my-quizzes");
    
    return (
        <div className="flex-1 max-w-7xl mx-auto grid md:grid-cols-[20%_80%] grid-cols-1 border border-base-content/50">
            <QuizzesSideBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
            <div className="grid p-3">
                Page
            </div>
        </div>
    )
}