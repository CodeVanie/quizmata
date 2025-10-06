import { SearchIcon } from "lucide-react";

export default function Search() {
    
    return (
        <div className="hidden md:block w-full text-end">
            <label className="input relative w-50 xm:w-60 border-base-300 bg-base-200 focus-within:bg-base-300 focus-within:rounded-full group">
                <SearchIcon className="size-4 absolute left-3 transition-[opacity] duration-300 ease-in-out group-focus-within:opacity-0 text-base-content/50" />
                
                <input type="search" placeholder="Search" required className="pl-7 flex-1 min-w-0 outline-none transition-all duration-300 ease-in-out group-focus-within:pl-0 text-base-content" />
            </label>
        </div>
    )
}