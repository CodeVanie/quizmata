import { useState } from "react"
import QuizzesSideBar from "./Components/QuizzesSideBar";
import Tab from "./Components/Tab";
import type { QuizzesPageTabs } from "../../lib/types";
import { NavLink, Outlet } from "react-router";

export default function QuizzesPage() {
    const [selectedTab, setSelectedTab] = useState<QuizzesPageTabs>("created");
    
    return (
        <div className="flex-1 max-w-7xl mx-auto">
            <div className="text-right px-3 hidden max-lg:block">
                <NavLink to="/create/quiz" className="btn btn-primary mb-3 mr-3 w-full">
                    + Create New Quiz
                </NavLink>
            </div>
            <div className="md:h-full grid md:grid-cols-[250px_1fr] grid-cols-1 rounded-box border-2 border-base-content/25 overflow-hidden">
                <QuizzesSideBar>
                    <Tab label="Created Quizzes" value="created" 
                    selected={selectedTab} onSelect={setSelectedTab} />
                    <Tab label="Starred Quizzes" value="starred" 
                    selected={selectedTab} onSelect={setSelectedTab} />
                    <Tab label="Quizzes Taken" value="taken" 
                    selected={selectedTab} onSelect={setSelectedTab} />
                </QuizzesSideBar>
                <section className="p-3 text-base-content bg-base-100">
                    <Outlet />
                </section>
            </div>
        </div>
    )
}