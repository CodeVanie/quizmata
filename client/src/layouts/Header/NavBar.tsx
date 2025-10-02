import { NavLink } from "react-router";
import CreateButton from "../../shared/components/Buttons/CreateButton";

export default function NavBar() {

    return (
        <nav className="hidden xs:block flex-1 text-base xm:text-lg">
            <ul className="flex text-center w-full">
                <li className="flex-1 content-center">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "font-bold border-b-4 border-accent" : "text-base-content hvr-underline-from-center"}>
                        Home
                    </NavLink>
                </li>
                <li className="flex-1 content-center">
                    <NavLink to="/quizzes" className={({ isActive }) => isActive ? "font-bold border-b-4 border-accent" : "text-base-content hvr-underline-from-center"}>
                        Quizzes
                    </NavLink>
                </li>
                <li className="flex-1 content-center">
                    <NavLink to="/classes" className={({ isActive }) => isActive ? "font-bold border-b-4 border-accent" : "text-base-content hvr-underline-from-center"}>
                        Classes
                    </NavLink>
                </li>
                <li className="flex-1 max-lg:hidden">
                    <CreateButton />
                </li>
            </ul>
        </nav>
    )
}