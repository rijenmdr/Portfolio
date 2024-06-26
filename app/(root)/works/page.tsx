import { Button } from '@/components/common'
import ProjectCard from '@/components/common/Card/ProjectCard'
import SectionHeading from '@/components/common/SectionHeading'
import { projects } from '@/static/projects'

type Props = {}

function Works({ }: Props) {
  return (
    <section className='mt-4 md:mt-8'>
      <SectionHeading
        title='Recent project'
        subTitle='Work'
      />

      <div className='grid grid-cols-1 xl:grid-cols-2 grid-x-[80px] lg:gap-x-[140px] gap-y-14'>
        {
          projects.map(project => (
            <ProjectCard
              key={project?.id}
              name={project?.name}
              category={project?.category}
              image={project?.image}
              link={project?.link}
            />
          ))
        }
      </div>

      <div className='mt-16 flex justify-center'>
        <Button
          label="Load More"
        />
      </div>
    </section>
  )
}

export default Works