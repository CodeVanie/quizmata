import { Trash2Icon } from "lucide-react";
import type { ReactNode } from "react";

type DeleteButtonProps = { 
    onDelete: () => void;
    IconSize: string;
    className: string;
    children: ReactNode
}

export default function DeleteButton({ onDelete, IconSize, className, children }: DeleteButtonProps) {
    const base = "btn btn-soft transition duration-100 ease-out"
  
    return (
        <button type="button" onClick={onDelete} className={`${base} ${className}`}>
            {children}
            <Trash2Icon className={`size-${IconSize}`}/>
        </button>
    )
}
