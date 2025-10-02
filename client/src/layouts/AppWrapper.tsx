import type { PropsWithChildren } from "react"
import { Toaster } from "react-hot-toast";

type LayoutProps = PropsWithChildren<{}>;

export default function AppWrapper({ children }: LayoutProps) {
    
    return (
        <div className='flex flex-col'>
            {children}
            <Toaster />
        </div>
    )
}