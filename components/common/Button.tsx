import { cn } from '@/lib/utils';
import { ArrowUpRight, CirclesFour } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    isLoading?: boolean;
}

const Button = ({ label, isLoading = false, ...props }: Props) => {
    return (
        <button {...props} className='flex items-center gap-2 bg-primary text-white px-10 py-[18px] transition-all hover:bg-white hover:text-primary border-2 border-primary text-lg w-fit rounded-[32px] disabled:bg-purple-100 disabled:border-purple-50 disabled:text-slate-500'>
            <span>
                {label}
            </span>

            <span className={cn('text-white flex justify-center items-center w-6 h-6 rounded-[16px]', `${props?.disabled ? 'bg-purple-200 text-slate-500' : 'linear-gradient'}`)}>
                {
                    isLoading ?
                        <CirclesFour className='animate-spin' /> :
                        <ArrowUpRight size={14} weight='bold' />
                }
            </span>
        </button>
    )
}

export default Button