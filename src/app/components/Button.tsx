"use client"

import React from "react";
import { IconType } from "react-icons/lib";

interface buttonProps{
    label:string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
    className?:string;
}
const Button: React.FC<buttonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon: Icon,
    onClick,
    className
}) => {
    return ( 
    <button 
    onClick={onClick}
    disabled={disabled} className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md 
        hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 
    ${outline? "bg-white":"bg-slate-700"} 
    ${outline? "text-slate-700": "text-white"}
    ${small? "text-sm font-light":"text-md font-semibold"}
    ${small? "px-2 py-1 border-[1px]":"px-4 py-3 border-2"}
    ${custom? custom: ''}`}>
        {Icon && <Icon size={24}/>}
        {label}
    </button> );
}
 
export default Button;