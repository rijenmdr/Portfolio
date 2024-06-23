import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title: string;
    subTitle: string;
    textColor?: string
}

const SectionHeading = ({ title, subTitle, textColor = "text-primary" }: Props) => {
    return (
        <div className={cn('flex flex-col gap-4 mb-6 md:mb-12', textColor)}>
            <h6 className='text-1 font-semibold italic'>
                {subTitle}
            </h6>

            <h2 className='heading-3 md:heading-2'>
                {title}
            </h2>
        </div>
    )
}

export default SectionHeading