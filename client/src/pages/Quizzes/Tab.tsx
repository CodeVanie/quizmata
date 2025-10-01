import type { QuizzesPageTabs } from "../../lib/types";

type QuizzesSideBarProps = {
    selected: QuizzesPageTabs;
    onSelect: (tab: QuizzesPageTabs) => void,
    label: string,
    value: QuizzesPageTabs;
}

export default function Tab({ selected, onSelect, label, value }: QuizzesSideBarProps) {
    const [labelOne, labelTwo] = label.split(" ");

    return (
        <li onClick={() => onSelect(value)} className={`quizzes-page-tab 
        ${selected === value ? "tab-selected" : "hover:bg-base-200"}`}>
            {labelOne} <span className="hidden md:inline p-0 ml-1 tranall-inout-200">{labelTwo}</span>
        </li>
    )
}