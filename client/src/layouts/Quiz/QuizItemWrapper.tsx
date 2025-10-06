import type { PropsWithChildren } from "react"

type LayoutProps = PropsWithChildren<{}>;

export default function QuizItemWrapper({ children }: LayoutProps) {
    
    return (
        <div className="card card-md shadow-sm bg-base-content/25">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}