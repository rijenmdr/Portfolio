import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title: string;
    subTitle?: string;
    textColor?: string
}

const SectionHeading = ({ title, subTitle, textColor = "text-primary" }: Props) => {
    return (
        <div className={cn('flex flex-col gap-2 md:gap-4 mb-6 md:mb-12', textColor)}>
            <h6 className='text-base md:text-1 font-semibold italic'>
                {subTitle}
            </h6>

            <h3 className='heading-4 md:heading-3'>
                {title}
            </h3>
        </div>
    )
}

export default SectionHeading