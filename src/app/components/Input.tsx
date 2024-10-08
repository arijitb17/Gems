"use client"
import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id, label, type = 'text', disabled, required, register, errors,
}) => {
    return (
        <div className='w-full relative'>
            <input
                autoComplete='off'
                id={id}
                disabled={disabled}
                type={type}
                {...register(id, { required })}
                className={`peer w-full p-3 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70
                disabled:cursor-not-allowed ${errors[id] ? 'border-rose-400' : 'border-slate-300'}
                ${errors[id] ? 'focus:border-rose-400' : 'focus:border-slate-300'}`}
            />
            <label htmlFor={id}
                className={`absolute text-md duration-150 transform -translate-y-3 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
                ${errors[id] ? 'text-rose-500' : 'text-slate-400'}`}
            >{label}</label>
        </div>
    );
}

export default Input;
