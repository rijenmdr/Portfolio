import SectionHeading from '@/components/common/SectionHeading'
import Experience from './Experience'
import { getUserExperiences } from '@/sanity/sanity.query'
import { Experience as ExperienceType } from '@/type/experience'

type Props = {}

const MyExperience = async ({ }: Props) => {
    const experiences: ExperienceType[] = await getUserExperiences();

    return (
        <div className='w-full linear-gradient p-10 md:p-20 lg:p-[120px] rounded-sm flex justify-between flex-wrap gap-4'>
            <SectionHeading
                title='Experience'
                subTitle='My Experience'
                textColor='text-white'
            />

            <div className='flex flex-col gap-10'>
                {
                    experiences?.length ?
                    experiences?.map(experience => (
                        <Experience
                            key={experience._id}
                            startYear={experience?.startDate}
                            endYear={experience?.endDate}
                            companyName={experience?.companyName}
                            position={experience?.role}
                        />
                    )) : null
                }
            </div>
        </div>
    )
}

export default MyExperience