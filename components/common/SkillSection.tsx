import React from 'react'
import SkillCard from './Card/SkillCard'
import { Skill } from '@/type/skills';

type Props = {
    title: string;
    tools: Skill[]
}

const SkillSection = ({ title, tools }: Props) => {
    return (
        <div className="linear-gradient p-4 md:p-10 rounded-md flex flex-col gap-8 md:gap-10 mt-10">
            <h4 className='heading-6 md:heading-4 text-white'>
                {title}
            </h4>
            <ul className="flex justify-center gap-x-8 gap-y-4 md:gap-y-10 flex-wrap ">
                {
                    tools?.map(tool => (
                        <SkillCard
                            key={tool?.id}
                            name={tool?.name}
                            image={tool?.image}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default SkillSection