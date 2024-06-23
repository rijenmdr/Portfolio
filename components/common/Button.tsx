import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

const Button = ({ label, ...props }: Props) => {
    return (
        <button {...props} className='flex items-center gap-2 bg-primary text-white px-10 py-[18px] transition-all hover:bg-white hover:text-primary border-2 border-primary text-lg w-fit rounded-[32px]'>
            <span>
                {label}
            </span>

            <span className='linear-gradient text-white flex justify-center items-center w-6 h-6 rounded-[16px]'>
                <ArrowUpRight size={14} weight='bold'/>
            </span>
        </button>
    )
}

export default Button