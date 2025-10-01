import { NavLink } from "react-router";
import { MoreSquareIcon } from "../../shared/IconCollections";

export default function HeaderMore() {
    
    return (
        <div className="xs:hidden">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-field px-2">
                    <MoreSquareIcon className="w-7"/>
                </div>
                <ul tabIndex={0} className="menu dropdown-content bg-base-200 rounded-field z-1 mt-4 w-54 text-center p-2 shadow-sm">
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "text-info" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/quizzes" className={({ isActive }) => isActive ? "text-info" : ""}>
                            Quizzes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes" className={({ isActive }) => isActive ? "text-info" : ""}>
                            Classes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}