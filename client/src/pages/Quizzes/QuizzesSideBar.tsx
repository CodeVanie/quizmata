import type { Dispatch, SetStateAction } from "react"

type QuizzesSideBarProps = {
    selectedTab: "my-quizzes" | "saved-quizzes" | "quizzes-taken",
    onTabSelect: Dispatch<SetStateAction<"my-quizzes" | "saved-quizzes" | "quizzes-taken">>
}

export default function QuizzesSideBar({ selectedTab, onTabSelect }: QuizzesSideBarProps) {

    return (
        <aside className="grid border-r border-base-content/25 p-3">
            <ul className="flex md:flex-col md:gap-y-3 divide-y divide-base-300 md:block border-b border-base-content/25">
                <li onClick={() => onTabSelect("my-quizzes")} 
                className={`quizzes-page-tab 
                ${selectedTab === "my-quizzes" ? "bg-base-300 hover:bg-base-300" : "hover:bg-base-200"}`}>
                    My Quizzes
                </li>
                <li onClick={() => onTabSelect("saved-quizzes")} 
                className={`quizzes-page-tab 
                ${selectedTab === "saved-quizzes" ? "bg-base-300 hover:bg-base-300" : "hover:bg-base-200"}`}>
                    Saved Quizzes
                </li>
                <li onClick={() => onTabSelect("quizzes-taken")} 
                className={`quizzes-page-tab 
                ${selectedTab === "quizzes-taken" ? "bg-base-300 hover:bg-base-300" : "hover:bg-base-200"}`}>
                    Quizzes Taken
                </li>
            </ul>
        </aside>
    )
}