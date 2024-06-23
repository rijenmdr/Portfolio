import SectionHeading from '@/components/common/SectionHeading'
import { experiences } from '@/static/experience'
import React from 'react'
import Experience from './Experience'

type Props = {}

const MyExperience = ({ }: Props) => {
    return (
        <div className='w-full linear-gradient p-10 md:p-20 lg:p-[120px] rounded-sm flex justify-between flex-wrap gap-4'>
            <SectionHeading
                title='Experience'
                subTitle='My Experience'
                textColor='text-white'
            />

            <div className='flex flex-col gap-10'>
                {
                    experiences?.map(experience => (
                        <Experience
                            key={experience.id}
                            startYear={experience?.startDate}
                            endYear={experience?.endDate}
                            companyName={experience?.companyName}
                            position={experience?.position}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MyExperience