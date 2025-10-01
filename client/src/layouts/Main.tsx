import type { PropsWithChildren } from "react"

type LayoutProps = PropsWithChildren<{}>;

export default function Main({ children }: LayoutProps) {
    
    return (
        <main className='flex-1 flex w-full md:pt-20 pt-35 min-h-dvh'>
            {children}
        </main>
    )
}