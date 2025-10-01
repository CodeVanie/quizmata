
type IconProps = {
    className?: string;
    fill?: string;
}

export function MoreSquareIcon({ className = "size-6", fill = "currentColor" } : IconProps) {
    
    return ( 
        <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 11.533c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 12.467v-.934ZM10 18.533c0-.847.687-1.533 1.533-1.533h.934c.846 0 1.533.686 1.533 1.533v.934c0 .847-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 19.467v-.934ZM10 4.533C10 3.686 10.687 3 11.533 3h.934C13.313 3 14 3.687 14 4.533v.934C14 6.314 13.313 7 12.467 7h-.934A1.533 1.533 0 0 1 10 5.467v-.934Z"></path></svg>
    )
}

export function SearchIcon({ className } : IconProps) {
    
    return ( 
        <svg className={`h-[1em] opacity-50 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
    )
}