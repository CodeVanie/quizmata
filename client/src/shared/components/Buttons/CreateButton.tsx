
export default function CreateButton() {

    return (
        <details className="dropdown">
            <summary className="btn bg-primary text-base-100 font-bold">+ Create</summary>
            <ul className="menu menu-md dropdown-content bg-base-200 rounded-box z-1 w-36 p-2 shadow-sm gap-y-2 text-base-100 font-bold">
                <li className="bg-primary rounded-field">
                    <a className="active:bg-primary/90 focus:bg-primary/90">New Quiz</a>
                </li>
                <li className="bg-primary rounded-field">
                    <a className="active:bg-primary/90 focus:bg-primary/90">New Class</a>
                </li>
            </ul>
        </details>
    )
}