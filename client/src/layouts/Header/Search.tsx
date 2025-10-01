import { SearchIcon } from "../../shared/IconCollections";

export default function Search() {
    
    return (
        <div className="hidden md:block">
            <label className="input relative focus-within:outline-0 w-55 focus-within:ring-0 border-base-300 bg-base-200 group">
                <SearchIcon className="absolute left-3 transition-all duration-300 ease-in-out group-focus-within:opacity-0" />
                
                <input type="search" placeholder="Search" required className="pl-7 flex-1 min-w-0 outline-none transition-all duration-300 ease-in-out group-focus-within:pl-0" />
            </label>
        </div>
    )
}