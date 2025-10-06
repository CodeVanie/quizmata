import { NavLink } from "react-router";

export default function CreateButton() {

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-primary text-base-100 font-bold">+ Create</div>
            <ul tabIndex={0} className="dropdown-content menu menu-md bg-base-200 rounded-box z-1 w-36 p-2 shadow-sm gap-y-2 text-base-100 font-bold">
                <li className="bg-primary rounded-field">
                    <NavLink to="/create/quiz" className="active:bg-primary/90 focus:bg-primary/90">
                        New Quiz
                    </NavLink>
                </li>
                <li className="bg-primary rounded-field">
                    <NavLink to="/create/class" className="active:bg-primary/90 focus:bg-primary/90">
                        New Class
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}