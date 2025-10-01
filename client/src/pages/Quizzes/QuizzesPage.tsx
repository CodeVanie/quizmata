import { useState } from "react"
import QuizzesSideBar from "./QuizzesSideBar";
import Tab from "./Tab";
import type { QuizzesPageTabs } from "../../lib/types";

export default function QuizzesPage() {
    const [selectedTab, setSelectedTab] = useState<QuizzesPageTabs>("created");
    
    return (
        <div className="flex-1 max-w-7xl mx-auto">
            <div className="text-right px-3 hidden max-lg:block">
                <button className="btn btn-primary mb-3 mr-3 w-full">
                    + Create New Quiz
                </button>
            </div>
            <div className="h-full grid md:grid-cols-[25%_75%] lg:grid-cols-[250px_1fr] grid-cols-1 border border-base-content/50">
                <QuizzesSideBar>
                    <Tab label="Created Quizzes" value="created" 
                    selected={selectedTab} onSelect={setSelectedTab} />
                    <Tab label="Saved Quizzes" value="saved" 
                    selected={selectedTab} onSelect={setSelectedTab} />
                    <Tab label="Quizzes Taken" value="taken" 
                    selected={selectedTab} onSelect={setSelectedTab} />
                </QuizzesSideBar>
                <section className="grid p-3">
                    Page
                </section>
            </div>
        </div>
    )
}