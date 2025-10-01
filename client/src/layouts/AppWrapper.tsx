import type { PropsWithChildren } from "react"

type LayoutProps = PropsWithChildren<{}>;

export default function AppWrapper({ children }: LayoutProps) {
    
    return (
        <div className='flex flex-col'>
            {children}
        </div>
    )
}