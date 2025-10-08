import type { PropsWithChildren } from "react"

type LayoutProps = PropsWithChildren<{}>;

export default function CreateQuizWrapper({ children }: LayoutProps) {
    
    return (
        <div className="flex-1 max-w-7xl mx-auto pb-96">
            {children}
        </div>
    )
}
