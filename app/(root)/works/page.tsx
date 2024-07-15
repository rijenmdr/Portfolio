import { Button } from '@/components/common'
import ProjectCard from '@/components/common/Card/ProjectCard'
import LoadMore from '@/components/common/LoadMore'
import SectionHeading from '@/components/common/SectionHeading'
import { getAllProjects } from '@/sanity/sanity.query'
import { SearchParams } from '@/type/generic'
import { Project } from '@/type/project'

type Props = {
  searchParams: SearchParams
}

async function Works({ searchParams }: Props) {
  const page = searchParams["page"] || "1"

  const { projects, totalCount } = await getAllProjects({
    page: Number(page)
  });

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

      <LoadMore
        projectsLength={projects?.length}
        totalCount={totalCount}
      />
    </section>
  )
}

export default Works