import SectionHeading from '@/components/common/SectionHeading'
import BasicDetail from '@/container/about/BasicDetail'
import MyExperience from '@/container/about/MyExperience'
import PersonalDetail from '@/container/about/PersonalDetail'

type Props = {}

function About({ }: Props) {
  return (
    <section className='mt-4 md:mt-8'>
      <SectionHeading
        title='Welcome to...'
        subTitle='Nice to meet you!'
      />

      <div className='flex justify-between gap-8 items-center flex-col md:flex-row mb-10 md:mb-[110px]'>
        <BasicDetail />

        <PersonalDetail />
      </div>

      <MyExperience/>
    </section>
  )
}

export default About