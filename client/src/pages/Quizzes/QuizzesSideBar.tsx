
export default function QuizzesSideBar({ children }: { children: React.ReactNode }) {

    return (
        <aside className="md:border-r md:border-base-content/25 p-3">
            <ul className="menu menu-horizontal md:menu-vertical px-0 pt-0 w-full border-b border-base-content/25">
                {children}
            </ul>
        </aside>
    )
}