import { SearchIcon } from "lucide-react";
import type { PropsWithChildren } from "react"
import { useLocation } from "react-router";

type LayoutProps = PropsWithChildren<{}>;

export default function HeaderWrapper({ children }: LayoutProps) {
    const { pathname } = useLocation();
    const isCreating = pathname === "/create/quiz" || pathname === "/create/class";
    
    return (
        <header className="fixed inset-x-0 z-20 border-b border-base-content/25 bg-base-100">
            <div className="max-md:border-b max-md:border-base-200">
                <div className="p-3 flex justify-between items-center max-w-6xl mx-auto">
                    {children}
                </div>
            </div>
            <div className={`md:hidden p-2 flex justify-between items-center max-w-6xl mx-auto ${isCreating && "hidden"}`}>
                <label className="input relative focus-within:outline-0 w-full focus-within:ring-0 border-base-300 bg-base-200 group">
                    <SearchIcon className="size-4 absolute left-3 transition-all duration-300 ease-in-out group-focus-within:opacity-0 text-base-content/50" />
                    <input type="search" placeholder="Search" required className="pl-7 flex-1 min-w-0 outline-none transition-all duration-300 ease-in-out group-focus-within:pl-0" />
                </label>
            </div>
        </header>
    )
}