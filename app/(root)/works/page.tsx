import { Button } from '@/components/common'
import ProjectCard from '@/components/common/Card/ProjectCard'
import SectionHeading from '@/components/common/SectionHeading'
import { getAllProjects } from '@/sanity/sanity.query'
import { projects } from '@/static/projects'
import { Project } from '@/type/project'

type Props = {}

async function Works({ }: Props) {
  const projects: Project[] = await getAllProjects();

  return (
    <section className='mt-4 md:mt-8'>
      <SectionHeading
        title='Recent project'
        subTitle='Work'
      />

      <div className='grid grid-cols-1 xl:grid-cols-2 grid-x-[80px] lg:gap-x-[140px] gap-y-14'>
        {
          projects?.length ?
            projects.map(project => (
              <ProjectCard
                key={project?._id}
                name={project?.name}
                category={project?.category}
                image={project?.logo}
                link={project?.url}
              />
            ))
            : null
        }
      </div>

      {/* <div className='mt-16 flex justify-center'>
        <Button
          label="Load More"
        />
      </div> */}
    </section>
  )
}

export default Works