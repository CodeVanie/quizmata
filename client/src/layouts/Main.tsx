import type { PropsWithChildren } from "react"
import { useLocation } from "react-router";

type LayoutProps = PropsWithChildren<{}>;

export default function Main({ children }: LayoutProps) {
    const { pathname } = useLocation();
    const isCreating = pathname === "/create/quiz" || pathname === "/create/class";
    
    return (
        <main className={`flex-1 flex w-full md:pt-20 min-h-dvh ${isCreating ? "pt-20" : "pt-35"}`}>
            {children}
        </main>
    )
}