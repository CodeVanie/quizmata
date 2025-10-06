import type { ReactNode } from "react";

export default function FieldSetWrapper({ title, children }:{ title: string, children: ReactNode }) {
    
    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mx-auto gap-y-3">
            <legend className="fieldset-legend">{title}</legend>
            {children}
        </fieldset>
    )
}