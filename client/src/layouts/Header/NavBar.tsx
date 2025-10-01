import { NavLink } from "react-router";
import CreateButton from "../../shared/components/Buttons/CreateButton";

export default function NavBar() {

    return (
        <nav className="hidden xs:block flex-1 text-base lg:text-lg">
            <ul className="flex text-center w-full md:gap-x-10 xs:max-md:justify-evenly items-center">
                <li>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "text-info font-bold" : "text-base-content"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quizzes" className={({ isActive }) => isActive ? "text-info font-bold" : "text-base-content"}>
                        Quizzes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/classes" className={({ isActive }) => isActive ? "text-info font-bold" : "text-base-content"}>
                        Classes
                    </NavLink>
                </li>
                <li className="max-lg:hidden">
                    <CreateButton />
                </li>
            </ul>
        </nav>
    )
}